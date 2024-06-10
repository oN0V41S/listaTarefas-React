import { useState } from "react";
import EditTaskModal from "./editTasdkModal";

export default function TaskCard({ id,nome, descricao, dataTermino }) {
  const [modalState, setModalState] = useState(false);

  const onRemove = () => {
    window.alert(`Tarefa removida: \nid:${id} \n${nome}`)
  }

  return (
    <div id="taskCard" className=" bg-white rounded-lg shadow-xl w-[220px] h-auto">
      <header className="p-4 text-center w-full bg-black text-white rounded-lg shadow-xl">
        {nome}
      </header>
      <div className="pt-4 w-full gap-5 flex flex-col p-4">
        <p className="pb-3 w-[90%] h-[25%]">{descricao}</p>
        <div className="mt-[10%]">{dataTermino}</div>
        <navbar className="flex justify-between mt-[10%]">
          <button type="button" onClick={onRemove}>Remover</button>
          <button type="button" onClick={()=>{setModalState(!modalState)}}>Editar</button>
          <EditTaskModal modalIsOpen={modalState} closeModal={()=>{setModalState(false)}}/>
        </navbar>
      </div>
    </div>
  );
}
