const express = require('express');
const router = express.Router();

const usuarioController = require('./controller/usuarioController');
const tokenController = require('../src/controller/tokenController');
const emailController = require('../src/controller/emailController');
const tarefaController = require('../src/controller/tarefaController');

//Rotas de usuário
router.post('/novoUsuario', usuarioController.novoUsuario);
router.post('/login', usuarioController.login);
router.post('/alterarSenha', usuarioController.redefinirSenha);

// Rotas para tarefas
router.post('/novaTarefa', usuarioController.validarToken, tarefaController.adicionarTarefa);
router.post('/alterarTarefa', usuarioController.validarToken, tarefaController.alterarTarefa);
router.post('/deletarTarefa', usuarioController.validarToken, tarefaController.deletarTarefa);
router.post('/listarTarefas',usuarioController.validarToken, tarefaController.listarTarefas)

//Rota para token
router.post('/validarToken', tokenController.validarToken);

//Rota para email
router.post('/verificarEmail', emailController.verificarEmail);
router.post('/enviarCodigoVerificacao', emailController.enviarCdVerificacao);

module.exports = router;