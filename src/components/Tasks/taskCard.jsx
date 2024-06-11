// Funções
import { useState } from "react";

// Serviços
import { RemoverTarefa } from "../../services/tarefas";

// Componentes
import EditTaskModal from "./editTasdkModal";
import RemoveTaskModal from "./removeTaskModal";
import { Navigate, useNavigate } from "react-router-dom";

export default function TaskCard({ id, nome, descricao, dataTermino }) {
  const [editModalState, setEditModalState] = useState(false);
  const [removeModalState, setRemoveModalState] = useState(false);

  const removeTask = () => {
    RemoverTarefa(nome);
    setRemoveModalState(!removeModalState);
    window.location.reload();
  };

  return (
    <div
      id="taskCard"
      className=" bg-white rounded-lg shadow-xl w-[220px] h-auto"
    >
      <header className="p-4 text-center w-full bg-black text-white rounded-lg shadow-xl">
        {nome}
      </header>
      <div className="pt-4 w-full gap-5 flex flex-col p-4">
        <p className="pb-3 w-[90%] h-[25%]">{descricao}</p>
        <div className="mt-[5%]">{dataTermino}</div>
        <div className="flex justify-between mt-[5%]">
          <button
            type="button"
            onClick={() => {
              setRemoveModalState(!removeModalState);
            }}
          >
            Remover
          </button>
          <RemoveTaskModal
            modalIsOpen={removeModalState}
            closeModal={setRemoveModalState}
            onRemove={removeTask}
            taskName={nome}
          />
          <button
            type="button"
            onClick={() => {
              setEditModalState(!editModalState);
            }}
          >
            Editar
          </button>
          <EditTaskModal
            modalIsOpen={editModalState}
            closeModal={() => {
              setEditModalState(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
