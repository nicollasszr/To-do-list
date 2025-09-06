import { useState } from 'react'
import Card from './Card';

interface task{
  id: number,
  title: string,
  description: string
}


function App() {

  let [title, setTitle] = useState("undifined");
  let [description, setDescription] = useState("undifined");
  const [taskList, setTaskList] = useState<task[]>([]);

  function deleteTask(id: number): void {
    setTaskList(taskList => taskList.filter(item => item.id !== id));
  }

  return (
  <main className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-start p-8">
    <header>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Lista de tarefas</h1>
    </header>

    <section className="container flex flex-col md:flex-row gap-8 w-full max-w-4xl items-start">
      
      <aside className="addTask bg-white rounded-lg shadow p-6 flex flex-col gap-4 w-full md:w-1/3 ">
        <label className="font-semibold text-gray-700">Título</label>
        <input 
          onChange={(event) => setTitle(event.target.value)}
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Insira o título"
        />

        <label className="font-semibold text-gray-700">Descrição</label>
        <input 
          onChange={(event) => setDescription(event.target.value)}
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Insira a descrição"
        />

        <button 
          onClick={() => {setTaskList([...taskList, {id: taskList.length + 1, title, description}])}}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Adicionar
        </button>
      </aside>

      <section className="showTask flex-1 flex flex-col gap-2">
        {taskList.map((task) => (
          <Card key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </section>

    </section>
  </main>
)
}

export default App;
