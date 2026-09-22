//-- arquivo apps/cursos/model/mdlCursos.js

const db = require("../../../database/databaseconfig");

const GetAllCursos = async () => {
    return (
        await db.query(
            "SELECT * " +
            "FROM cursos where deleted = false ORDER BY codigo ASC"
        )
    ).rows;
};

const GetCursoByID = async (cursoIDPar) => {
    return (
        await db.query(
            "SELECT *" +
            "FROM cursos WHERE cursoid = $1 and deleted = false ORDER BY codigo ASC",
            [cursoIDPar]
        )
    ).rows;
};

const InsertCurso = async (cursoREGPar) => {
    //variável msg para retornor erros de banco de dados.
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "INSERT INTO cursos " + "values(default, $1, $2, $3, $4)",
                [
                    cursoREGPar.codigo,
                    cursoREGPar.descricao,
                    cursoREGPar.ativo,
                    cursoREGPar.deleted,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlCursos|InsertCurso] " + error.detail;
        linhasAfetadas = -1;
    }
    return { msg, linhasAfetadas };
};

const UpdateCurso = async (cursoIDPar, cursoREGPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE cursos SET " +
                "codigo = $2, " +
                "descricao = $3, " +
                "ativo = $4, " +
                "deleted = $5 " +
                "WHERE cursoid = $1",
                [
                    cursoIDPar,
                    cursoREGPar.codigo,
                    cursoREGPar.descricao,
                    cursoREGPar.ativo,
                    cursoREGPar.deleted,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlCursos|UpdateCurso] " + error.detail;
        linhasAfetadas = -1;
    }
    return { msg, linhasAfetadas };
};

const DeleteCurso = async (cursoIDPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE cursos SET " + "deleted = true " + "WHERE cursoid = $1",
                [cursoIDPar]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlCursos|DeleteCurso] " + error.detail;
        linhasAfetadas = -1;
    }
    return { msg, linhasAfetadas };
};

module.exports = {
    GetAllCursos,
    GetCursoByID,
    InsertCurso,
    UpdateCurso,
    DeleteCurso,
};