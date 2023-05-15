import React from "react";
import style from "./Column-toDo.module.scss";
import Task from "../../task";

function ColumnTodo() {
    return(
        <div className={style.column}>
            <h1 className={style.toDoTitulo}>To do</h1>

            <Task/>
        </div>
    )
}

export default ColumnTodo;