import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { RemoverTarefa } from "../../services/tarefas";

export default function RemoveTaskModal({ modalIsOpen, closeModal, taskName }) {
  Modal.setAppElement("#root");

  const removeTask = () => {
    RemoverTarefa(taskName);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={style}
    >
      <h2 className="w-max m-auto ">Deseja Remover a Tarefa?</h2>
      <form
        action=""
        className="w-[75%] m-auto mt-3 flex justify-between text-white"
      >
        <Link
          to="/tarefas"
          className="bg-green-500 pl-7 p-1 pr-7 rounded-md shadow-md hover:shadow-lg focus:shadow-lg transition-all"
          onClick={removeTask}
          replace
        >
          Sim
        </Link>
        <button
          type="button"
          className="bg-red-500 pl-7 p-1 pr-7 rounded-md shadow-md hover:shadow-lg focus:shadow-lg transition-all"
          onClick={closeModal}
        >
          Não
        </button>
      </form>
    </Modal>
  );
}

const style = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    width: "25vw",
    height: "20vh",
    border: "none",
    boxShadow: "0px 0px 50px 1px rgba(0,0,0,0.5)",
  },
};
