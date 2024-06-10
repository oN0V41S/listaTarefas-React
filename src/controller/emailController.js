const emailServices = require('../services/emailServices');
const userModel = require('../model/usuarioModel');

function gerarCodigoVerificacao() {
    return Math.floor(10000 + Math.random() * 90000).toString();
}

module.exports = {

    // Esse módulo verficia o email do usuário
    verificarEmail: async (req, res) =>{

        let json = {
            result: []
        }

        try{

            let email = req.body.email;
            let cdVerificacao = req.body.codigoVerificacao;

            if(email && cdVerificacao){

                console.log(email, cdVerificacao)
                
                // Fazendo o 'UPDATE'
                let resultado = await userModel.updateOne(
                    { 
                        email: email,
                        codigoVerificacao: cdVerificacao
                    }, // Encontrar o usuário pelo email
                    { $set: { verificacao: true } } // Definir o novo nome
                 )
                 

                 if(resultado.modifiedCount != 1){
                    json.result.push({
                        status: 'codigo errado'
                    })
                 }else{

                    json.result.push({
                        status: 'usuario verificado',
                        email: email
                     })
                 }

                 res.json(json)

            }else{
                json.error = 'Esta faltando algum parâmetro'
                res.json(json)
            }

        }catch(error){
            json.result.push({
                error: error
           
            })
        }
    },

    // Esse módulo enviar um email verificação e muda ele no BD
    enviarCdVerificacao: async (req, res) => {
        let json = {
            result: []
        };

        try {
            let email = req.body.email;

            if (email) {
                let codigoVerificacao = gerarCodigoVerificacao();

                let resultado = await userModel.updateOne(
                    { 
                        email: email 
                    },
                    { $set: { codigoVerificacao: codigoVerificacao } }
                );

                if (resultado.modifiedCount > 0) {
                    await emailServices.enviarEmail(email, codigoVerificacao);
                    
                    json.result.push({
                        status: true,
                        mensagem: 'Email enviado com sucesso'
                    });
                }else{

                    json.error = 'Email não encontrado';
                }
            }else{

                json.error = 'O email está faltando';
            }
        }catch(error) {
            json.result.push({
                error: error
           
            })
        }

        res.json(json);
    }
};