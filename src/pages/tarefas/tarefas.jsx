// Importando Estilo
import "./tarefas.css";

// Componentes
import TaskSquare from "../../components/taskSquare";
import CreateTaskModal from "../../components/createTaskModal";
import Layout from "../../components/layout";

// Serviços e Funções
import AdicionarTarefa from "../../services/tarefas";
import React, { useState } from "react";

// Assets
import adicionar from "../../assets/adicionar.png";
import { BsListTask } from "react-icons/bs";

function Tarefas() {
  // Manipulação de Tarefas
  const [tasks, setTasks] = useState([
    {
      nomeTarefa: "Tarefa",
      nomeGrupo: "SENAI Suiço Brasileira",
      nomeMateria: "PWBE",
      descricao: "Fazer Trabalho de n sei oq",
      dataTermino: "2024-06-12",
    },
  ]);

  // Manipulação de Modal
  const [modalCreateTask, setModalCreateTask] = useState();

  return (
    <Layout>
      <main className="p-5">
        <div
          id="titulo"
          className="w-[83vw] flex mt-4 mb-10 m-auto align-center"
        >
          <BsListTask className="mt-auto mb-auto mr-5" />
          <h1 className="h-max font-normal text-xl">TAREFAS</h1>
        </div>
        {/* <div id="titulo-filtros" className="w-[83vw] m-auto">
          <h3 className="text-2xl mb-4 font-normal">Filtros</h3>
          <div id="filtros">
            <div id="disciplinas">
              <h3>Disciplinas</h3>
              <Select
                className="w-auto"
                options={optionsExample}
                value={selectedOption}
                onChange={handleChangeOption}
                placeholder="Nenhuma"
                // isSearchable // Parâmetro para procurar valores
              />
            </div>
          </div>
        </div> */}
        <div id="lista-tasksquare" className="m-auto">
          <div
            id="adicionar-tarefa"
            onClick={() => setModalCreateTask(!modalCreateTask)}
            className="m-0 mt-0 mr-0"
          >
            <div id="titulo-adicionar">
              <h3 className="m-auto p-2 text-center">Adicionar Tarefa</h3>
            </div>
            <img
              src={adicionar}
              alt="adicionar tarefa"
              className="m-auto mt-10"
            ></img>
          </div>
          {tasks.map((task, index) => (
            <TaskSquare
              key={index}
              task={task}
              taskId={task.id}
              onDelete={() => {
                AdicionarTarefa(task);
              }}
            />
          ))}
        </div>
        <CreateTaskModal
          modalIsOpen={modalCreateTask}
          closeModal={() => setModalCreateTask(!modalCreateTask)}
        />
      </main>
    </Layout>
  );
}

export default Tarefas;
