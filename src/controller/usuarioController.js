const userModel = require('../model/usuarioModel');
const emailServices = require('../services/emailServices');
const jwt = require('jsonwebtoken');
require('dotenv')

// Essa função gera um número aleatório de 5 caracteres para ser usado como código de verificação
function gerarCodigoVerificacao() {
    return Math.floor(10000 + Math.random() * 90000).toString();
}

module.exports ={
    novoUsuario: async (req, res) =>{

        let json = {
           
            result: []
        }

        // Criando o código que sera enviado para o email
        const cdVerificacao = gerarCodigoVerificacao()

        try{

            let nome = req.body.nome;
            let email = req.body.email;
            let senha = req.body.senha;
    
            if(nome && email && senha){

                // Sintax para criar um novo usuario
                let novoUsuario = userModel({
                    nome: nome,
                    email: email,
                    senha: senha,
                    verificacao: false,
                    codigoVerificacao: cdVerificacao})
    
                // Salvando no BD o novo usuario
                await novoUsuario.save();

                // Enviando o código de verificação via email
                emailServices.enviarEmail(email, cdVerificacao)
    
                json.result.push({
                    status: 'criado com sucesso',
                    nome: nome,
                    email: email,
                    statusVerificacao: false
                })

            }else{
                json.result.push({
                    error: 'esta faltando algum parâmetro' 
                }) 
            }

            res.json(json)
            
        }catch(error){
            if(error.errorResponse.code == 11000){
                json.result.push({
                    error: "Email ja cadastrado"
                })
            }else{
                json.result.push({
                    error: error
               
                })
            }
            res.json(json)
        }
       
    },

    login: async (req, res) => {

        let json = {
          
            result: []
        }

        try{

            let email = req.body.email;
            let senha = req.body.senha;

            if(email && senha){

                // Sintax para realizar um 'SELECT' no mongoDB
                let resultado = await userModel.find(
                    {
                        email: email,
                        senha: senha
                    },
                    'nome email verificacao'
                )

                if(resultado.length == 0){
                    json.result.push({
                        statusLogin: false,
                        mensagem: 'Email ou Senha errados'
                    })
                   
                // Validando se o email foi verificado
                }else if(resultado[0].verificacao == false){

                    json.result.push({
                        statusLogin: false,
                        mensagem: 'o email do usuario nao foi verificado'
                    })
    
                }else{

                    // Gerando token de identidade para o usuário que foi logado
                    
                    let token = jwt.sign({ userId: resultado[0]._id }, process.env.SECRET, { expiresIn: '10h' });
                    
                    json.result.push({
                        statusLogin: true,
                        id: resultado[0]._id,
                        nome: resultado[0].nome,
                        email: resultado[0].email,
                        token: token

                    })
                  
                }

                res.json(json)
            }else{

                json.result.push({
                    error: 'esta faltando algum parâmetro'
               
                })
            
                res.json(json)
            }

        }catch(error){
            json.result.push({
                error: error
           
            })

            res.json(json)
        }
    },

    redefinirSenha: async (req, res) => {

        let json = {
            result: []
        }

        try{

            let email = req.body.email;
            let cdVerificacao = req.body.codigoVerificacao;
            let novaSenha = req.body.novaSenha;

            if(email && cdVerificacao && novaSenha){

                // Sintax para um 'UPDATE' no mongoDB
                let resultado = await userModel.updateOne(
                    { 
                        email: email,
                        codigoVerificacao: cdVerificacao
                    },
                    { $set: { senha: novaSenha } }
                 )
                 

                 if(resultado.modifiedCount != 1){
                    json.result.push({
                        status: 'codigo errado'
                    })
                 }else{

                    json.result.push({
                        status: 'Senha alterada',
                        email: email
                     })
                 }

                 res.json(json)

            }else{
                json.result.push({
                    error: 'esta faltando algum parâmetro'
               
                })

                res.json(json)
            }

        }catch(error){
            json.result.push({
                error: error
           
            })

            res.json(json)
        }
    },

    validarToken: async (req, res, next) => {

        let json = {
            result: []
        }

            const token = req.headers['bearer']
            const idUsuario = req.body.idUsuario
            try{

                if(!token){
                    json.result.push({
                        status: 'você nao passou o token'
                    })

                    res.josn(json)

                }else if (!idUsuario){
                    json.result.push({
                        status: 'você nao passou o idUsuario'
                    })

                    res.josn(json)
                }

                let decoded = jwt.verify(token, process.env.SECRET)

                if(decoded.userId != idUsuario) {

                    json.result.push({
                        status: "Acesso negado"
                    })
                    res.json(json);
                    
                }else{
                    next();
                }
            }catch(error){

                if(error.name == "TokenExpiredError"){
                    json.result.push({
                        status: "O token expirou"
                    })
                }else{
                    json.result.push({
                        error: error
                    })
                }

                res.json(json)
            }
    }
}