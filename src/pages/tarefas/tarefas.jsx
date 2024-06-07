import React, { useState } from "react";
import TaskSquare from "../../components/taskSquare";
import Modal from "../../components/modal";
import logo from "../../assets/logoSquad (1).png";
import adicionar from "../../assets/adicionar.png";
import { BsListTask } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import "./tarefas.css";

function Tarefas() {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setOpenModal(false);
  };

  const removeTask = (id) => {
    console.log(id);
    const removedTasks = tasks.filter((task) => task.id !== id);
    setTasks(removedTasks);
  };

  return (
    <>
      <header>
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="instituicao">
          <h1>
            Instituição{" "}
            <div id="icone-menu">
              {" "}
              <FiAlignJustify />{" "}
            </div>
          </h1>
        </div>
        <div id="usuario">
          <h1>
            Usuário{" "}
            <div id="icone-baixo">
              {" "}
              <FiChevronDown />{" "}
            </div>
          </h1>
        </div>
      </header>
      <main className="p-5">
        <div id="titulo" className="w-[83vw] flex mt-10 mb-10 m-auto align-center">
          <BsListTask className="mt-auto mb-auto mr-5"/>
          <span className="h-max">TAREFAS</span>
        </div>
        <div id="titulo-filtros" className="w-[83vw] m-auto">
          <h3>Filtros</h3>
          <div id="filtros">
            <div id="disciplinas">
              <h3>
                Disciplinas
                <div id="icone-baixo">
                  <FiChevronDown />
                </div>
              </h3>
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
      </main>
    </>
  );
}

export default Tarefas;
