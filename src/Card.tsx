import { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
}

interface CardProps {
  task: Task;
  deleteTask: (id: number) => void;
}

function Card({ task, deleteTask }: CardProps) {

  const [isDeleted, setDeleted] = useState(false);

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow mb-2 gap-4">
      <button onClick={() => deleteTask(task.id)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded cursor-pointer">🗑️</button>
      <div onClick={() => setDeleted(!isDeleted)} className="flex-1 ml-4 cursor-pointer">
        {isDeleted? <del><h1 className="text-lg font-bold">{task.title}</h1></del> : <h1 className="text-lg font-bold">{task.title}</h1>}
        {isDeleted? <del className="text-gray-700">{task.description}</del> : <p className="text-gray-700">{task.description}</p>}
      </div>
    </div>
  )
}

export default Card;
