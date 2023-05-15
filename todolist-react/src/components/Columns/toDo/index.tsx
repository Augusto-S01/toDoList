import React from "react";
import style from "./toDo.module.scss";
import Task from "../../task";
import { Tarefa } from "../../../models/Tarefa";


interface Props{
    tarefas: Tarefa[];
}

function ToDo(tarefas: Props) {

    
    return(
        <div className={style.column}>
            <h1 className={style.toDoTitulo}>To do</h1>
            {tarefas.tarefas.map((tarefa) => (
                <Task key={tarefa.id} tarefa={tarefa}/>
            ))}
        </div>
    )
}

export default ToDo;