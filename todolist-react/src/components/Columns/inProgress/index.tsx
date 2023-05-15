import style from "./inProgress.module.scss";
import Task from "../../task";
import React, { useState } from "react";
import { Tarefa } from "../../../models/Tarefa";


interface Props{
    tarefas: Tarefa[];
}
function InProgress( tarefas: Props) {

    const [tarefasInProgress, setTarefasInProgress] = useState<Props>(tarefas);

    const handleDragStart = (tarefa: Tarefa) => {
      // Manipule o evento de arrastar aqui, se necessário
      console.log("Tarefa arrastada:", tarefa);
    };
  
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const tarefa = JSON.parse(event.dataTransfer.getData("text/plain")) as Tarefa;
      console.log("Tarefa solta:", tarefa);
    };
  
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    };

    return(
        <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={style.column}>
            <h1 className={style.inProgressTitulo} >in Progress</h1>

            {tarefas.tarefas.map((tarefa) => (
                <Task key={tarefa.id} tarefa={tarefa} onDragStart={handleDragStart}/>
            ))}
        </div>
    )
}

export default InProgress;