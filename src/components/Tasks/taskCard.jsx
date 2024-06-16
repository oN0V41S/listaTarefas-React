// Funções
import { useState } from "react";
import { FormatarData } from "../../services/tarefas";

// Componentes
import EditTaskModal from "./editTasdkModal";

export default function TaskCard({
  nome,
  descricao,
  dataTermino,
  onRemove,
  onUpdate,
}) {
  const [editModalState, setEditModalState] = useState(false);
  const dataFormatada = FormatarData(dataTermino);

  return (
    <div
      id="taskCard"
      className=" bg-white rounded-lg shadow-xl w-[220px] h-auto m-auto lg:m-0"
    >
      <header className="p-2 mt-4 text-center w-[90%] m-auto border-b-4 border-black font-normal rounded-sm ">
        {nome}
      </header>
      <div className="pt-4 w-full gap-5 flex flex-col p-4">
        <p className="pb-3 w-[90%] h-[25%]">{descricao}</p>
        <div className="mt-[5%]">{dataFormatada}</div>
        <div className="flex justify-between mt-[5%]">
          <button
            type="button"
            onClick={() => {
              onRemove(nome);
            }}
          >
            Remover
          </button>
          {/* <RemoveTaskModal
            modalIsOpen={removeModalState}
            closeModal={() => {
              setRemoveModalState(false);
            }}
            taskName={nome}
          /> */}
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
            taskName={nome}
            onUpdate={onUpdate}
          />
        </div>
      </div>
    </div>
  );
}
