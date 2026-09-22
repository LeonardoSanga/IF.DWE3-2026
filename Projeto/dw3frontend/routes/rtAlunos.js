// arquivo: ./routes/rtAlunos.js

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('alunos/vwLstAlunos', {
        title: 'Alunos',
        showNavbar: true,
        activeMenu: 'alunos',
        servidorDw3: process.env.SERVIDOR_DW3 // Usado para configurar a url do backend.
    });
});

router.get('/form', function(req, res) {
    res.render('alunos/vwFormAlunos', {
        title: 'Formulario de alunos',
        showNavbar: true,
        activeMenu: 'alunos',
        servidorDw3: process.env.SERVIDOR_DW3
    });
});

module.exports = router;