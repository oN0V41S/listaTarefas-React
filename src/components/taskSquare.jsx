// TaskSquare.js
import React, { useState } from "react";
import "../components/taskSquare.css";
import { FaCalendarAlt } from "react-icons/fa";
import ModalView from "./modalView"; // Importar o componente ModalView
import { SlOptionsVertical } from "react-icons/sl";

function TaskSquare({ task, taskId, onDelete }) {
    const [modalOpen, setModalOpen] = useState(false);

    const titleStyle = {
        backgroundColor: task.backgroundColor,
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const handleDeleteTask = () => {
        onDelete(task.id);
        // Implemente a lógica para excluir a tarefa
        console.log("Tarefa excluída:", task);
        setModalOpen(false); // Fechar o modal após excluir a tarefa
    };

    return (
        <div
            id="task-square"
            TaskId={task.id}
            className="rounded-2xl flex flex-col mr-0 mt-0"
        >
            <header
                id="titulo-tasksquare"
                className="w-[100%] text-center h-max p-4 bg-black-500"
            >
                {task.nomeTarefa}
            </header>
            {/* <div id="info-tasksquare" onClick={openModal}>
                <SlOptionsVertical />
            </div> */}
            <h4 id="disciplina-tasksquare">Materia: {task.nomeMateria}</h4>
            <p id="descricao-tasksquare m-0">{task.descricao}</p>
            <div id="data-tasksquare">
                <FaCalendarAlt /> {task.dataTermino}
            </div>
            {modalOpen && (
                <ModalView
                    task={task}
                    setCloseModal={() => setModalOpen(false)}
                    onDelete={handleDeleteTask}
                />
            )}
        </div>
    );
}

export default TaskSquare;
