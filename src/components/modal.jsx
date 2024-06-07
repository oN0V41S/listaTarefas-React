import React, { useState } from "react";
import "../components/modal.css";

function Modal({ isOpen, setCloseModal, addTask }) {
  const [taskName, setTaskName] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [titleBackgroundColor, setTitleBackgroundColor] = useState("");
  const [nextId, setNextId] = useState(1); // Iniciar o próximo ID com 1

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddTask = () => {
    // Formatar a data de término para o formato DD-MM-AAAA
    const formattedEndDate = endDate.split("-").reverse().join("/");

    const newTask = {
      id: nextId, // Utilizar o próximo ID disponível
      name: taskName,
      endDate: formattedEndDate,
      description: description,
      backgroundColor: titleBackgroundColor,
    };
    addTask(newTask);

    // Incrementar o próximo ID disponível
    setNextId(nextId + 1);

    // Limpar os campos após adicionar a tarefa, se necessário
    setTaskName("");
    setEndDate("");
    setDescription("");
  };

  const handleTitleBackgroundColorChange = (color) => {
    setTitleBackgroundColor(color);
  };


  return (
    isOpen && (
      <div id="fundo-modal-adicionar">
        <div id="modal-adicionar" className="flex flex-col">
          <div id="titulo-modal" style={{ backgroundColor: titleBackgroundColor }}>
            <h1>Criar nova tarefa</h1>
            <button type="button" id="fechar-modal" onClick={setCloseModal}>
              X
            </button>
          </div>
          <div id="input-nomeTarefa">
            <h4 id="titulo-nomeTarefa">Nome da tarefa</h4>
            <input
              type="text"
              value={taskName}
              onChange={handleTaskNameChange}
              maxLength={30}
            />
            <div id="contador-titulo">{taskName.length}/30</div>
          </div>
          <div id="input-tempo">
            <h4 id="titulo-dataTermino">Data de término</h4>
            <input
              id="tempo-termino"
              type="date"
              placeholder="Data de término"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
          <div id="textarea-descricao">
            <h4 id="titulo-descricao">Descrição da tarefa</h4>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              maxLength={100}
            ></textarea>
            <div id="contador">{description.length}/100</div>
          </div>
          <div id="btns-modal">
            <button id="btn-adicionar" onClick={handleAddTask}>
              Adicionar Tarefa
            </button>
          </div>
          <div id="title-background-color-menu">
            <h4 id="titulo-cor">Coloração</h4>
            <input
              type="color"
              value={titleBackgroundColor}
              onChange={(event) =>
                handleTitleBackgroundColorChange(event.target.value)
              }
            />
          </div>
          <div id="disciplina">
            <h4 id="titulo-disciplina">Disciplina</h4>
            <select id="select-disciplina">
              <option>Selecione a disciplina</option>
            </select>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
