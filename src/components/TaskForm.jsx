import { useState, useContext } from "react"
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
    
    const [ title, setTitle] = useState("")
    const [ description, setDescription] = useState("")

    let {createTask} = useContext(TaskContext)

    const handleSubmite = (e) => {
        e.preventDefault()
        createTask({
            title,
            description
        })
        setTitle("")
        setDescription("")
    }

    return (
        <div className="max-w-md mx-auto">
            <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmite}>
                <h1 className="text-2-xl font-bold text-white mb-3"> Crea tu tarea </h1>
                <input 
                    className="bg-slate-300 p-3 w-full mb-2"
                    placeholder="Escribe tu tarea" 
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                ></input>
                <textarea 
                          className="bg-slate-300 p-3 w-full mb-2"
                          placeholder="Escribue una descripcion"
                          onChange={ e => setDescription(e.target.value) }                
                          value={description}
                    >
                </textarea>
            <button className="bg-indigo-500 px-3 py-1 text-white">
                Guardar
            </button>
            </form>

        </div>
    )
}

export default TaskForm