import { useState } from "react";
import Modal from "react-modal";

// import { FaDumpster } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CreateTaskModal({
  modalIsOpen,
  closeModal,
  taskBackground,
  addTask,
}) {
  Modal.setAppElement("#root");

  const [task, setTask] = useState({
    nome: "",
    descricao: "",
    dataTermino: "",
  });

  return (
    <Modal
      isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={style}
    >
      <header
        className="w-[80%] flex justify-between font-semibold m-auto h-auto pt-2 bt-4"
        style={{ backgroundColor: taskBackground }}
      >
        <h1>Criar Tarefa</h1>
        <button onClick={closeModal}>Fechar</button>
      </header>
      <form
        action={closeModal}
        className="w-[90%] m-auto mt-10 flex flex-wrap gap-5 justify-center"
      >
        <input
          type="text"
          placeholder="Nome da Tarefa"
          className="pl-5 pr-5 p-3 w-[85%] text-slate-500 border-none shadow-[0_0_10px_-5px_rgba(0,0,0,0.9)] rounded-lg focus:outline-none focus:shadow-[0_0_10px_-3.5px_rgba(0,0,0,0.9)] transition all"
          onChange={(e) => {
            setTask({ ...task, nome: e.target.value });
          }}
          value={task.nome}
          name="nome"
        />
        <textarea
          type="text"
          placeholder="Descrição da Tarefa"
          className="pl-5 pr-5 p-3 w-[85%] h-[15vh] text-slate-500 border-none shadow-[0_0_10px_-5px_rgba(0,0,0,0.9)] rounded-lg focus:outline-none focus:shadow-[0_0_10px_-3.5px_rgba(0,0,0,0.9)] transition all resize-none"
          onChange={(e) => {
            setTask({ ...task, descricao: e.target.value });
          }}
          value={task.descricao}
          name="descricao"
          resize
        />
        <input
          type="date"
          className="pl-5 pr-5 p-3 w-[85%] text-slate-500 border-none shadow-[0_0_10px_-5px_rgba(0,0,0,0.9)] rounded-lg focus:outline-none focus:shadow-[0_0_10px_-3.5px_rgba(0,0,0,0.9)] transition all"
          onChange={(e) => {
            setTask({ ...task, dataTermino: e.target.value });
          }}
          value={task.dataTermino}
          name="data"
        />
        <Link
          className="bg-green-400 p-7 pt-2 pb-2 rounded-xl shadow-[0_0_10px_-5px_rgba(0,0,0,0.9)] hover:shadow-[0_0_10px_-2px_rgba(0,0,0,0.9)] transition-all text-white"
          to="/tarefas"
          onClick={() => {
            addTask(task);
            setTask({});
          }}
        >
          Adicionar Tarefa
        </Link>
      </form>
      <p id="logAddTask" className="w-full text-red-600 text-center"></p>
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
    width: "35vw",
    height: "70vh",
    border: "none",
    boxShadow: "0px 0px 50px 1px rgba(0,0,0,0.5)",
  },
};
