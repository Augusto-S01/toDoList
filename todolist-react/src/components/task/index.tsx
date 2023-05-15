import style from "./task.module.scss";
import React, { useState } from "react";
import Editar from "../botoes/editar";


import { Tarefa } from "../../models/Tarefa";
import Excluir from "../botoes/Excluir";

interface Props{
    tarefa: Tarefa;
    onDragStart?: (tarefa: Tarefa, event: React.DragEvent<HTMLDivElement>) => void;
}

function Task({tarefa,onDragStart}: Props) {
    const [editando, setEditando] = useState<Boolean>(false);

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData("text/plain", JSON.stringify(tarefa));
        onDragStart && onDragStart(tarefa, event);
      };
    
    
    return(
        <div className={style.task} draggable onDragStart={handleDragStart} >
            <span className={style.spanDescricao}>Descrição:</span>
            <p className={style.descricao}>{tarefa.description}</p>
            <div className={style.containerData}>
                <span className={style.spanType}>Criado:</span>
                <span className={style.data}>{new Date(tarefa.createDate).toLocaleDateString("pt-BR")}</span>
            </div>
            <div className={style.containerData}>
                <span className={style.spanType}>Prazo:</span>
                <span className={style.data}>{new Date(tarefa.deadlineDate).toLocaleDateString("pt-BR")}</span>
            </div>
            {tarefa.finishedDate &&  
            <div className={style.containerData}>
                <span className={style.spanType}>Finalizado:</span>
                <span className={style.data}>{new Date(tarefa.finishedDate).toLocaleDateString("pt-BR")}</span>
            </div>}
            <div className={style.containerBotoes}>
                <Editar/>
                <Excluir/>

            </div>

            

        </div>
    )

    function getFormattedDate(date: Date){
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }
}

export default Task;