import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // para evitar que se recargue la página
    createTask({ title, description });
    setTitle("");
    setDescription(""); // para limpiar los inputs.
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-4">Crea tu tarea</h1>
        <input
          placeholder="Escribe una tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title} // para que el input tenga el valor del estado, se quede vacio.
          className="w-full p-2 rounded-md mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe una descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full p-2 rounded-md mb-2"
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
