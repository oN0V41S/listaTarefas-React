// Configurando o dotenv para ele localizar o arquivo '.env'
require('dotenv').config({ path: 'variaveis.env' });

// Estanciando em uma variável a conexão com o BD
const bd = require('../bd.js')

// Framework usada para criar a API
const express = require('express');

// Biblioteca que lê parâmetros via body
const bodyParser = require('body-parser');

// Biblioteca que permite requisições de IP(s) diferntes do servidor
const cors = require('cors');

//Arquivo em que esta as rotas da API
const router = require('./routes.js');

// Criando API
const app = express();

// Conectando ao BD
bd();

// Usando as bibliotecas e arquivos necessários
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(router);

// Debugando a API
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});