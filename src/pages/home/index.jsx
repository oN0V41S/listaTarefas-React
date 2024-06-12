import TaskCard from "../../components/Tasks/taskCard";

export default function Home() {
  return (
    <main className="w-[100%] h-min-[100vh] flex bg-grey-900">
      <section className="m-auto mt-20 font-bold ">
        Tela inicial
        <h1>(Texto Descritivo)</h1>
        <TaskCard />
      </section>
    </main>
  );
}
