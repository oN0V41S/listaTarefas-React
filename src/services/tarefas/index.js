import axios from "axios";
import { jwtDecode } from "jwt-decode";

export async function AdicionarTarefa(task) {
  try{
    console.log("Adicionando Tarefa...")
    const token = localStorage.getItem("token")
    const url = process.env.REACT_APP_API_URL;
  
    const decodificacao = jwtDecode(token)
    const userId = decodificacao.userId
    
    const header = {
      headers: {
        bearer: `${token}`
      }
    }
    const body = {
      idUsuario: `${userId}`,
      nomeTarefa: `${task.nomeTarefa}`,
      descricao: `${task.descricao}`,
      dataTermino: `${task.dataTermino}`,
      status: ''
     }
  
    const response = await axios.post(`${url}/adicionartarefa`, body, header)
    console.log(response)
    return 
    }catch(e){
      console.log(`Erro ao Adicionar tarefa:\n${e}`)
    }
}

export async function BuscarTarefas() {
  try{
  console.log("Buscando Tarefas...")
  const token = localStorage.getItem("token")
  const url = process.env.REACT_APP_API_URL;

  const decodificacao = jwtDecode(token)
  const userId = decodificacao.userId
  
  const header = {
    headers: {
      bearer: `${token}`
    }
  }

  const response = await axios.post(`${url}/listarTarefas/`, {idUsuario: `${userId}`}, header)
  const tarefas = response.data.result[0].tarefas;
  return tarefas
  }catch(e){
    console.log("Erro ao Buscar tarefas:\n${e]")
  }
}