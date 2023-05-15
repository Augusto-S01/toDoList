import React from "react";
import style from "./toDo.module.scss";
import Task from "../../task";
import { Tarefas } from "../../../models/Tarefas";


interface Props{
    tarefas: Tarefas[];
}

function ToDo(tarefas: Props) {
    return(
        <div className={style.column}>
            <h1 className={style.toDoTitulo}>To do</h1>
            <input type="button" onClick={() => {console.log(tarefas)}}/>
            <Task/>
        </div>
    )
}

export default ToDo;