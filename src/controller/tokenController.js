const jwt = require('jsonwebtoken')

module.exports = {

    validarToken: (req, res) =>{

        let json = {
            result: []
        }

            const token = req.headers['bearer']
            try{

                if(!token){
                    json = { 
                        status: false,
                        message: 'token nao encontrado'
                    }

                    res.json(json)

                }

                // Verificando o token
                jwt.verify(token, process.env.SECRET)

                    json = { 
                        status: true,
                        message: 'token valido'
                    }

                    res.json(json)
                
            }catch(error){

                if(error.name == "TokenExpiredError"){
                    json.result.push({

                        status: false,
                        message: 'token expirou'
                    })
                }else if (error.name == "JsonWebTokenError"){
                    json.result.push({

                        status: false,
                        message: `erro: ${error}`

                    })
                }

                res.json(json)
            }

    }
}