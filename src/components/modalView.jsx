// ModalView.js
import React from 'react';
import '../components/modal.css';

function ModalView({ task, setCloseModal, onDelete }) {
    const titleStyle = {
        backgroundColor: task.backgroundColor
    };
    
    const handleCloseModal = () => {
        setCloseModal();
    };
    
    return (
        <div id='fundo-modal-visualizar'>
            <div id='modal-visualizar'>
                <div id='titulo-modal-visualizar' style={titleStyle}>
                    <h1>Detalhes da Tarefa</h1>
                    <button id='fechar-modal-visualizar' onClick={handleCloseModal}>X</button>
                </div>

                <div id='detalhes-tarefa'>
                    <p><strong>Nome da Tarefa:</strong> {task.name}</p>
                    <p><strong>Disciplina:</strong> {task.disciplina}</p>
                    <p><strong>Descrição:</strong> {task.description}</p>
                    <p><strong>Data de Término:</strong> {task.endDate}</p>
                </div>

                <button id='btn-excluir' onClick={onDelete}>Excluir Tarefa</button>
            </div>
        </div>
    );
}

export default ModalView;
