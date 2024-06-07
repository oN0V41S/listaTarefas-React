// TaskSquare.js
import React, { useState } from 'react';
import '../components/taskSquare.css';
import { FaCalendarAlt } from "react-icons/fa";
import ModalView from './modalView'; // Importar o componente ModalView
import { SlOptionsVertical } from "react-icons/sl";

function TaskSquare({ task, taskId, onDelete }) {
    const [modalOpen, setModalOpen] = useState(false);

    const titleStyle = {
        backgroundColor: task.backgroundColor
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const handleDeleteTask = () => {
        onDelete(task.id)
        // Implemente a lógica para excluir a tarefa
        console.log("Tarefa excluída:", task);
        setModalOpen(false); // Fechar o modal após excluir a tarefa
    };

    return (
        <div id="task-square" TaskId={task.id}>
            <div id='titulo-tasksquare' style={titleStyle} >
                <h3>{task.name}</h3> 
            </div>
            <div id='info-tasksquare' onClick={openModal}> <SlOptionsVertical /></div>
            <div id='disciplina-tasksquare'>
                <h4>Disciplina: {task.disciplina}</h4>
            </div>
            <div id='descricao-tasksquare'>
                <p>{task.description}</p>
            </div>
            <div id='data-tasksquare'>
                <p><div id='calendario-icon'><FaCalendarAlt /> {task.endDate}</div></p> 
            </div>
            {modalOpen && <ModalView task={task} setCloseModal={() => setModalOpen(false)} onDelete={handleDeleteTask} />}
        </div>
    );
}

export default TaskSquare;
