import { Link } from "react-router-dom";
import TaskCard from "../../components/Tasks/taskCard";

export default function Home() {
  return (
    <main className="w-[100%] h-min-[100vh] flex bg-grey-900">
      <section className="m-auto mt-20 flex gap-40">
        <div className="gap-4">
          <h1 className="text-center h-max">(Texto Descritivo)</h1>
          <Link to="/">Fazer login</Link>
        </div>
        <TaskCard nome="Tarefa Exemplo" dataTermino={"2024-07-22"} onRemove={()=>{console.log("Exemplo de Tarefa")}} onUpdate={()=>{console.log("Exemplo de Tarefa")}}/>
      </section>
    </main>
  );
}
