import { createContext, useState, useEffect} from "react"
import { tasks as data } from "../data/task"

// Este es el que almacena los datos
export const TaskContext = createContext();

// pero este es el que engloba al resto de componentes
export function TaskContextProvider(props) {
    // Esto es para que los componenentes "hijos" , es decir lo que estan dentro de app, puedan usar task
    const [tasks, setTasks] = useState([])
  
    function createTask(task) {
        setTasks([...tasks, 
          {title: task.title, 
            id: tasks.length,
            description :task.description
          }
        ])
      }

  function deleteTask(taskId) {
    console.log(tasks)
    console.log(taskId)

    // let task_filtrado= 
    setTasks(tasks.filter( task => task .id !== taskId ))
  }

  useEffect(() => {
    setTasks(data)
  }, [])


  // Para mandar en el valor
  let valor = {
    tasks:tasks,
    deleteTask: deleteTask,
    createTask: createTask

  }
    return (
        <TaskContext.Provider value={valor}>
            {props.children}
        </TaskContext.Provider>
    )
}

