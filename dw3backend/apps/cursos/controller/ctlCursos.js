//-- arquivo apps/cursos/controller/ctlCursos.js
const mdlCursos = require("../model/mdlCursos");

const GetAllCursos = (req, res) => (async () => {
    let registro = await mdlCursos.GetAllCursos();

    res.json({ status: "ok", "registro": registro });
})();

const GetCursoByID = (req, res) => (async () => {
    const cursoID = parseInt(req.params.cursoid);
    let registro = await mdlCursos.GetCursoByID(cursoID);
    res.json({ status: "ok", "registro": registro });
})();

const InsertCurso = (request, res) => (async () => {
    //variável msg para retornar erros de banco de dados.
    const cursoREG = request.body;
    let { msg, linhasAfetadas } = await mdlCursos.InsertCurso(cursoREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
})();

const UpdateCurso = (request, res) => (async () => {
    const cursoID = parseInt(request.params.cursoid);
    const cursoREG = request.body;
    let { msg, linhasAfetadas } = await mdlCursos.UpdateCurso(cursoID, cursoREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
})();

const DeleteCurso = (request, res) => (async () => {
    const cursoID = parseInt(request.params.cursoid);
    let { msg, linhasAfetadas } = await mdlCursos.DeleteCurso(cursoID);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
})();

module.exports = {
    GetAllCursos,
    GetCursoByID,
    InsertCurso,
    UpdateCurso,
    DeleteCurso
};