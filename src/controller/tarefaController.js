const userModel = require('../model/usuarioModel')

module.exports = {

    listarTarefas: async (req, res) => {
        let json = {
            result: []
        };
    
        try {

            let idUsuario = req.body.idUsuario;
    
            if (idUsuario) {

                let resultado = await userModel.findOne(
                    { 
                        _id: idUsuario 
                    },
                    'tarefas'
                    
                );

                    json.result.push({
                        status: 'sucesso',
                        tarefas: resultado
                        });
                
            }else{
               json.result.push({
                    error: 'Algum parâmetro esta faltando'
               })
            }
    
            res.json(json);
        } catch (error) {

            json.result.push({
                error: error
            })

            res.json(json);
        }
    },  

    adicionarTarefa: async (req, res) => {
        let json = {
            result: []
        };
    
        try {

            let validacao;

            let idUsuario = req.body.idUsuario;

            let nomeTarefa = req.body.nomeTarefa;
            let descricao = req.body.descricao;
            let dataTermino = req.body.dataTermino;
            let status = req.body.status;
    
            if (nomeTarefa && dataTermino && idUsuario && status && descricao) {

                let resultado = await userModel.findOne(
                    { 
                        _id: idUsuario 
                    },
                    'tarefas'
                    
                );
                
                // verificando se nao existe uma tarefa com esse nome
                for(let i = 0; i < resultado.tarefas.length ; i++){

                    if(nomeTarefa == resultado.tarefas[i].nome){
                        validacao = true;
                    }
                }

                if(validacao === true){
                    json.result.push({
                        error: 'essa tarefa ja existe'
                    })

                }else{
                    await userModel.updateOne(
                        {
                            _id: idUsuario,
                        },
                        {
                            $push: {
                                "tarefas": {
                                    nome: nomeTarefa,
                                    dataTermino: new Date(dataTermino),
                                    descricao: descricao,
                                    status: status
                                }
                            }
                        },
                    );
    
                        json.result.push({
                            status: 'Tarefa adicionada com sucesso',
                            idUsuario: idUsuario,
                            nome: nomeTarefa,
                            descricao: descricao,
                            dataTermino: dataTermino,
                            statusTarefa: status
                        });
                }
            }else{

               json.result.push({
                    error: 'Algum parâmetro esta faltando'
               })
            }
    
            res.json(json);
        } catch (error) {

            json.result.push({
                error: error
            })

            res.json(json);
        }
    },   

    alterarTarefa: async (req, res) => {

        let json = {
            result: []
        };
    
        try {

            let validacao;

            //Dados que seram usados como filtro para ser possivel chegar na tarefa desejada
            let idUsuario = req.body.idUsuario;
            let nomeTarefa = req.body.nomeTarefa;

            //Dados Atualizados
            let novoNomeTarefa = req.body.novoNomeTarefa;
            let novaDataTermino = req.body.novaDataTermino;
            let novaDescricao = req.body.novaDescricao;
            let novoStatus = req.body.novoStatus;
            let novaCor = req.body.novaCor

            //Verificando se os parâmetros foram passados
            if (nomeTarefa && novaDataTermino && novoStatus && idUsuario && novoNomeTarefa && novaCor && novaDescricao) {
                
                    let resultado = await userModel.findOne(
                        { 
                            _id: idUsuario 
                        },
                        'tarefas'
                    );
                    
                    // verificando se nao existe uma tarefa com o novo nome passado
                    for(let i = 0; i < resultado.tarefas.length ; i++){
    
                        if(novoNomeTarefa == resultado.tarefas[i].nome){
                            validacao = true;
                        }
                    }
    
                    if(validacao === true){
                        json.result.push({
                            error: 'js existe uma tarefa com esse nome'
                        })
                    }else{

                        await userModel.updateOne(
                            {
                                _id: idUsuario,
                                "tarefas.nome": nomeTarefa,
                            },
                            {
                                $set: {
                                    "tarefas.$[tarefa].nome": novoNomeTarefa,
                                    "tarefas.$[tarefa].dataTermino": novaDataTermino,
                                    "tarefas.$[tarefa].status": novoStatus,
                                    "tarefas.$[tarefa].descricao": novaDescricao,
                                    "tarefas.$[tarefa].cor": novaCor
                                }
                            },
                            {
                                arrayFilters: [
                                   { "tarefa.nome": nomeTarefa }
                                ]
                            }
                        );
            
                        json.result.push({
                            status: "Alterado com sucesso",
                            novoNome: novoNomeTarefa,
                            novaDataTermino: novaDataTermino,
                            navaDescricao: novaDescricao,
                            novoStatus: novoStatus
                        });
                    }
    
                res.json(json);
            } else {
                json.result.push({
                    error: 'Está faltando algum parâmetro'
                });
    
                res.json(json);
            }
        } catch (error) {
            json.result.push({
                error: error.message
            });
    
            res.json(json);
        }
    },

    deletarTarefa: async(req, res) => {

        let json = {
            result: []
        }

        try{

            let idUsuario = req.body.idUsuario;
            let nomeTarefa = req.body.nomeTarefa;

            if(idUsuario && nomeTarefa){

                let resultado = await userModel.updateOne(

                    { 
                        _id: idUsuario,
                        "tarefas.nome": nomeTarefa
                    },
                    { 
                        $pull: { 
                            "tarefas": { nome: nomeTarefa } 
                        } 
                    },
                )

                if(resultado.modifiedCount != 1){
                    json.result.push({
                        error: "Essa tarefa não existe"
                    })
                    
                }else{

                    json.result.push({
                        status: "excluido com sucesso",
                        nomeTarefa: nomeTarefa,
                    })
                }

            }else{

                json.result.push({
                    error: 'Algum parâmetro esta faltando'
                })
            }

            res.json(json)

        }catch(error){
            json.result.push({
                error: error
            })

            res.json(json)
        }
    }
}