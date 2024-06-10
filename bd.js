// biblioteca usada para ler arquivos '.env'
require('dotenv')
const mongoose = require('mongoose');

// Função para se conectar com MongoDB
async function conexao(){
    return (
        mongoose    
            .connect(`mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@${process.env.BD_NAME}.vbjgcju.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.BD_NAME}`)
            .then(console.log(`Conectado ao BD !!!`))
            .catch((error) =>(console.log('erro na conexão com o BD \n', error)))
    )
}

module.exports = conexao;


