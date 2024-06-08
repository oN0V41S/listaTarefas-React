export default function AdicionarTarefa(task) {
  // Serviço para Adicionar tarefa
  // const response = await fetch('http://localhost:3000/tarefas', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(task),
  // });
  // const data = await response.json();
  // console.log(data);
  // return data;
  console.log("Salvando Tarefa no armazenemnto local");
  window.alert(`task ` + task.nomeTarefa + `salva com sucesso`);
}
