import React from "react";
import style from "./toDo.module.scss";
import Task from "../../task";
import { Tarefa } from "../../../models/Tarefa";
import { patchToDo } from "../../../services/taskService";


interface Props{
    tarefas: Tarefa[];
    atualizaTarefas: () => void;
    openSubModal: () => void;
    setIdTarefaAtual: (id: number | undefined) => void;
    openConfirmDelete: () => void;
    deletarTask: (tarefa: Tarefa) => void;
}

function ToDo({tarefas,atualizaTarefas,openSubModal,setIdTarefaAtual,openConfirmDelete,deletarTask}: Props) {

    const handleDragStart = (tarefa: Tarefa) => {
        // Manipule o evento de arrastar aqui, se necessário
        console.log("Tarefa arrastada:", tarefa);
      };
    
      const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const tarefa = JSON.parse(event.dataTransfer.getData("text/plain")) as Tarefa;
        patchToDo(tarefa).then(() => {
          atualizaTarefas();
        });
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
            <h1 className={style.toDoTitulo}>To do</h1>
            {tarefas.map((tarefa) => (
                <Task 
                  key={tarefa.id} 
                  tarefa={tarefa} 
                  onDragStart={handleDragStart} 
                  atualizarTarefa={atualizaTarefas} 
                  openSubModal={openSubModal} 
                  setIdTarefaAtual={setIdTarefaAtual}
                  openConfirmDelete={openConfirmDelete}
                  deletarTask={deletarTask}
                  />
            ))}
        </div>
    )
}

export default ToDo;