// Importando Estilo e Funções do React
import "./tarefas.css";
import React, { useState } from "react";

// Importando Componentes
import TaskSquare from "../../components/taskSquare";
import Modal from "../../components/modal";
import Select from "react-select";

// Importando Assets
import adicionar from "../../assets/adicionar.png";
import { BsListTask } from "react-icons/bs";
import CreateTaskModal from "../../components/createTaskModal";
import Layout from "../../components/layout";

function Tarefas() {
  // Manipulação de Tarefas e Modal de Tarefas
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    console.log(tasks);
    // setTasks([...tasks, newTask]);
    setOpenModal(false);
  };
  const removeTask = (id) => {
    console.log(id);
    const removedTasks = tasks.filter((task) => task.id !== id);
    setTasks(removedTasks);
  };

  // Variáveis de Dropdown e Menu
  const [selectedOption, setSelectedOption] = useState(null);
  const optionsExample = [
    { value: "", label: "Nenhum" },
    { value: "1", label: "Opção 1" },
    { value: "2", label: "Opção 2" },
    { value: "3", label: "Opção 3" },
  ];
  const handleChangeOption = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const [modalCreateTask, setModalCreateTask] = useState();
  const [taskEx, setTaskEx] = useState({});
  const handleChangeTask = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTaskEx({ ...taskEx, [name]: value });
    console.log(taskEx);
  };

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
        <div id="titulo-filtros" className="w-[83vw] m-auto">
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
        </div>
        <div id="lista-tasksquare" className="m-auto">
          <div id="adicionar-tarefa" onClick={() => setOpenModal(true)}>
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
              onDelete={removeTask}
            />
          ))}
        </div>
        <Modal
          isOpen={openModal}
          setCloseModal={() => setOpenModal(!openModal)}
          addTask={addTask}
        />
        <button onClick={() => setModalCreateTask(!modalCreateTask)}>
          Abrir Modal de criar Tarefas
        </button>
        <CreateTaskModal
          modalIsOpen={modalCreateTask}
          closeModal={() => setModalCreateTask(!modalCreateTask)}
          handleChangeTask={handleChangeTask}
          taskValue={taskEx}
          onSubmit={addTask}
          // taskBackground={taskBackground}
        />
      </main>
    </Layout>
  );
}

export default Tarefas;
