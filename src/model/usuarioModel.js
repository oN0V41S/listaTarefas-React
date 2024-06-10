const mongoose = require('mongoose');

// criando o modelo de tarefas

const tarefasSchema = mongoose.Schema({
  nome: {
    type: String,
    maxlength: 50
  },
  dataTermino: {
    type: Date
  },
  descricao: {
    type: String,
    maxlength: 300
  },
  status: {
    type: String,
    maxlength: 50
  },
  cor: {
    type: String,
    maxlength: 15
  }
})

// criando o modelo do objeto 'usuario'
const userSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 80
  },
  senha: {
    type: String,
    required: true,
    maxlength: 20
  },
  verificacao: {
    type: Boolean
  },
  codigoVerificacao: {
    type: Number,
    maxlength: 5
  },
  tarefas: [tarefasSchema]
});

let userModel = mongoose.model('Usuario', userSchema);

module.exports = userModel;