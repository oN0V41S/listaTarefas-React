import axios from "axios";
import { jwtDecode } from "jwt-decode";

export async function AdicionarTarefa(task) {
  try {
    console.log("Adicionando Tarefa...");
    const token = localStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;

    const decodificacao = jwtDecode(token);
    const userId = decodificacao.userId;

    const header = {
      headers: {
        bearer: `${token}`,
      },
    };
    const body = {
      idUsuario: `${userId}`,
      nomeTarefa: `${task.nome}`,
      descricao: `${task.descricao}`,
      dataTermino: `${task.dataTermino}`,
      status: "null",
      cor: "",
    };

    const response = await axios.post(`${url}/novaTarefa`, body, header);
    const status = response.data.result[0].status;
    if (status === "Tarefa adicionada com sucesso") {
      console.log("Tarefa Adicionada");
    } else {
      console.log(`Erro ao adicionar tarefa: \n${status}`);
    }
    return;
  } catch (e) {
    console.log(`Erro ao Adicionar tarefa:\n${e}`);
  }
}
export async function BuscarTarefas() {
  try {
    console.log("Buscando Tarefas...");
    const token = localStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;

    const decodificacao = jwtDecode(token);
    const userId = decodificacao.userId;

    const header = {
      headers: {
        bearer: `${token}`,
      },
    };

    const response = await axios.post(
      `${url}/listarTarefas/`,
      { idUsuario: `${userId}` },
      header,
    );
    const tarefas = response.data.result[0].tarefas;
    console.log("Tarefas Buscadas");
    return tarefas;
  } catch (e) {
    console.log(`Erro ao Buscar tarefas:\n${e}`);
  }
}
export async function RemoverTarefa(nome) {
  try {
    console.log(`Removendo Tarefa \nId: ${nome}`);
    const token = localStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;

    const decodificacao = jwtDecode(token);
    const userId = decodificacao.userId;

    const header = {
      headers: {
        bearer: `${token}`,
      },
    };

    const response = await axios.post(
      `${url}/deletartarefa/`,
      { idUsuario: `${userId}`, nomeTarefa: `${nome}` },
      header,
    );
    const status = response.data.result[0].status;
    console.log(status);
    return;
  } catch (e) {
    console.log(`Erro ao remover tarefas:\n${e}`);
  }
}
export async function AtualizarTarefa(task, taskName) {
  try {
    console.log(`Atualizando Tarefa \nId: ${task.nome}`);
    const token = localStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;

    const decodificacao = jwtDecode(token);
    const userId = decodificacao.userId;

    const header = {
      headers: {
        bearer: `${token}`,
      },
    };
    const body = {
      idUsuario: `${userId}`,
      nomeTarefa: `${taskName}`,
      novoNomeTarefa: `${task.nome}`,
      novaDataTermino: `${task.dataTermino}T00:00:00.000+00:00`,
      novaDescricao: `${task.descricao}`,
      novoStatus: "null",
      novaCor: "null",
    };

    const response = await axios.post(`${url}/alterartarefa/`, body, header);
    console.log(response);
    return;
  } catch (e) {
    console.log(`Erro ao Atualizar tarefas:\n${e}`);
  }
}

export function FormatarData(dataString) {
  // Remover a parte da hora da string
  const dataSemHora = dataString.split("T")[0];

  // Inverter a ordem da data (ano-mês-dia)
  const partesData = dataSemHora.split("-");
  const dataInvertida = `${partesData[2]}-${partesData[1]}-${partesData[0]}`;

  return dataInvertida;
}
