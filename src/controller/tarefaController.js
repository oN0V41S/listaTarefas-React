const userModel = require('../model/usuarioModel')

module.exports = {

    adicionarTarefa: async (req, res) => {
        let json = {
            result: []
        };
    
        try {

            let validacao;

            let idUsuario = req.body.idUsuario;
            let nomeGrupo = req.body.nomeGrupo;

            let nomeTarefa = req.body.nomeTarefa;
            let descricao = req.body.descricao;
            let dataTermino = req.body.dataTermino;
            let status = req.body.status;
    
            if (nomeTarefa && dataTermino && idUsuario && nomeGrupo && status && descricao) {

                // let resultado = await userModel.findOne(
                //     { 
                //         _id: idUsuario 
                //     },
                //     { grupos: 
                //         { 
                //             $elemMatch: { nome: nomeGrupo } 
                //         } 
                //     }
                // );
                
                // verificando se nao existe uma tarefa com esse nome
                // for(let i = 0; i < resultado.grupos[0].materias[0].tarefas.length ; i++){

                //     if(nomeTarefa == resultado.grupos[0].materias[0].tarefas[i].nome){
                //         validacao = true;
                //     }
                // }

                // if(validacao === true){
                //     json.result.push({
                //         error: 'essa tarefa ja existe'
                //     })

                // }else{

                    await userModel.updateOne(
                        {
                            _id: idUsuario,
                            "grupos.nome": nomeGrupo,
                        },
                        {
                            $push: {
                                "grupos.$[grupo].tarefas": {
                                    nome: nomeTarefa,
                                    dataTermino: new Date(dataTermino),
                                    descricao: descricao,
                                    status: status
                                }
                            }
                        },
                        {
                            arrayFilters: [
                                { "grupo.nome": nomeGrupo },
                            ]
                        }
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
            else {

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
            let nomeGrupo = req.body.nomeGrupo;
            let nomeMateria = req.body.nomeMateria;
            let nomeTarefa = req.body.nomeTarefa;

            //Dados Atualizados
            let novoNomeTarefa = req.body.novoNomeTarefa;
            let novaDataTermino = req.body.novaDataTermino;
            let novaDescricao = req.body.novaDescricao;
            let novoStatus = req.body.novoStatus;
            let novaCor = req.body.novaCor

            //Verificando se os parâmetros foram passados
            if (nomeTarefa && nomeMateria && novaDataTermino && novoStatus && idUsuario && nomeGrupo && novoNomeTarefa) {
                
                    let resultado = await userModel.findOne(
                        { 
                            _id: idUsuario 
                        },
                        { grupos: 
                            { 
                                $elemMatch: { nome: nomeGrupo } 
                            } 
                        }
                    );
                    
                    // verificando se nao existe uma tarefa com o novo nome passado
                    for(let i = 0; i < resultado.grupos[0].materias[0].tarefas.length ; i++){
    
                        if(novoNomeTarefa == resultado.grupos[0].materias[0].tarefas[i].nome){
                            validacao = true;
                        }
                    }
    
                    if(validacao === true){
                        json.result.push({
                            error: 'js existe uma tarefa com esse nome'
                        })
    
                    }else{

                        let resultado2 = await userModel.updateOne(
                            {
                                _id: idUsuario,
                                "grupos.nome": nomeGrupo,
                                "grupos.materias.nome": nomeMateria,
                                "grupos.materias.tarefas.nome": nomeTarefa
                            },
                            {
                                $set: {
                                    "grupos.$[grupo].materias.$[materia].tarefas.$[tarefa].nome": novoNomeTarefa,
                                    "grupos.$[grupo].materias.$[materia].tarefas.$[tarefa].dataTermino": novaDataTermino,
                                    "grupos.$[grupo].materias.$[materia].tarefas.$[tarefa].status": novoStatus,
                                    "grupos.$[grupo].materias.$[materia].tarefas.$[tarefa].descricao": novaDescricao,
                                    "grupos.$[grupo].materias.$[materia].tarefas.$[tarefa].cor": novaCor
                                }
                            },
                            {
                                arrayFilters: [
                                    { "grupo.nome": nomeGrupo },
                                    { "materia.nome": nomeMateria },
                                    { "tarefa.nome": nomeTarefa }
                                ]
                            }
                        );

                        console.log(resultado2);
            
                        json.result.push({
                            status: "Alterado com sucesso",
                            novoNome: novoNomeTarefa,
                            novaDataTermino: novaDataTermino,
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
            let nomeGrupo = req.body.nomeGrupo;
            let nomeMateria = req.body.nomeMateria;
            let nomeTarefa = req.body.nomeTarefa;

            if(idUsuario && nomeGrupo && nomeMateria && nomeTarefa){

                let resultado = await userModel.updateOne(

                    { 
                        _id: idUsuario,
                        "grupos.nome": nomeGrupo,
                        "grupos.materias.nome": nomeMateria,
                        "grupos.materias.tarefas.nome": nomeTarefa
                    },
                    { 
                        $pull: { 
                            "grupos.$[grupo].materias.$[materia].tarefas": { nome: nomeTarefa } 
                        } 
                    },
                    {
                        arrayFilters: [
                            { "grupo.nome": nomeGrupo },
                            { "materia.nome": nomeMateria }
                        ]
                    }
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