//-- arquivo: routes/routes.js

//@ Importa as bibliotecas e arquivos
const express = require("express");
const routerApp = express.Router();
const appCalculadora = require("../controller/calculadora.js");

//@ Configura as rotas
routerApp.post("/somar", appCalculadora.somar);
routerApp.post("/subtrair", appCalculadora.subtrair);
routerApp.post("/multiplicar", appCalculadora.multiplicar);
routerApp.post("/dividir", appCalculadora.dividir);

//@ Exporta a variável com as rotas
module.exports = routerApp;
