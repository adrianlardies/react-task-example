import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); // Estado global de las tareas [{}, {}, {}]

  function createTask(task) {
    setTasks([
      ...tasks,
      { title: task.title, id: tasks.length, description: task.description },
    ]); // coge todo el array y le añade el nuevo task.
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []); // cuando cargue el componente, se ejecuta el useEffect.

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
