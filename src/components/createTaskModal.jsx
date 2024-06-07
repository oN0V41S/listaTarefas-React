import { useState } from "react";
import Modal from "react-modal";

export default function CreateTaskModal({
  modalIsOpen,
  closeModal,
  handleChangeTask,
  taskValue,
  taskBackground,
  onSubmit,
}) {
  const style = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      width: "35vw",
      height: "90vh",
      border: "none",
      boxShadow: "0px 0px 50px 1px rgba(0,0,0,0.5)",
    },
  };

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={style}
    >
      <header
        className="w-[80%] flex justify-between m-auto h-auto pt-2 bt-4"
        style={{ backgroundColor: taskBackground }}
      >
        <h1>Criar Tarefa</h1>
        <button onClick={closeModal}>close</button>
      </header>
      <form
        // onSubmit={onSubmit}
        // action={closeModal}
        className="w-[90%] m-auto mt-10 flex flex-wrap gap-5 justify-center"
      >
        <input
          type="text"
          placeholder="Nome da Tarefa"
          className="pl-5 pr-5 p-3 w-[85%] text-slate-500 border-none shadow-[0_0_10px_-5px_rgba(0,0,0,0.9)] rounded-lg focus:outline-none focus:shadow-[0_0_10px_-3.5px_rgba(0,0,0,0.9)] transition all"
          onChange={handleChangeTask}
          //   value={taskValue.nome}
          name="nome"
        />
        <textarea
          type="text"
          placeholder="Descrição da Tarefa"
          className="pl-5 pr-5 p-3 w-[85%] h-[15vh] text-slate-500 border-none shadow-[0_0_10px_-5px_rgba(0,0,0,0.9)] rounded-lg focus:outline-none focus:shadow-[0_0_10px_-3.5px_rgba(0,0,0,0.9)] transition all resize-none"
          onChange={handleChangeTask}
          //   value={taskValue.descricao}
          name="descricao"
          resize
        />
        <input
          type="text"
          placeholder="Instituição"
          className="pl-5 pr-5 p-3 w-[40%] text-slate-500 border-none shadow-[0_0_10px_-5px_rgba(0,0,0,0.9)] rounded-lg focus:outline-none focus:shadow-[0_0_10px_-3.5px_rgba(0,0,0,0.9)] transition all"
          onChange={handleChangeTask}
          //   value={taskValue.instituicao}
          name="instituicao"
        />
        <input
          type="text"
          placeholder="Disciplina"
          className="pl-5 pr-5 p-3 w-[40%] text-slate-500 border-none shadow-[0_0_10px_-5px_rgba(0,0,0,0.9)] rounded-lg focus:outline-none focus:shadow-[0_0_10px_-3.5px_rgba(0,0,0,0.9)] transition all"
          onChange={handleChangeTask}
          //   value={taskValue.disciplina}
          name="disciplina"
        />
        <input
          type="date"
          className="pl-5 pr-5 p-3 w-[85%] text-slate-500 border-none shadow-[0_0_10px_-5px_rgba(0,0,0,0.9)] rounded-lg focus:outline-none focus:shadow-[0_0_10px_-3.5px_rgba(0,0,0,0.9)] transition all"
          onChange={handleChangeTask}
          //   value={taskValue.data}
          name="data"
        />
        {/* <input
          type="color"
          className="w-[80%] h-5 p-0 text-slate-500 border-none shadow-[0_0_10px_-5px_rgba(0,0,0,0.9)] rounded-lg focus:outline-none focus:shadow-[0_0_10px_-3.5px_rgba(0,0,0,0.9)] transition all"
          onChange={handleChangeBackground}
          //   value={taskValue.cor}
          name="cor"
        /> */}
        <button
          className="bg-green-400 p-7 pt-2 pb-2 rounded-xl shadow-[0_0_10px_-5px_rgba(0,0,0,0.9)] hover:shadow-[0_0_10px_-2px_rgba(0,0,0,0.9)] transition-all text-white"
          type="button"
          onClick={onSubmit}
        >
          Adicionar Tarefa
        </button>
      </form>
    </Modal>
  );
}
