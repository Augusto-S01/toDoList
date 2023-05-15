import style from "./task.module.scss";
import React from "react";
import Editar from "../botoes/editar";
import Comecar from "../botoes/comecar";
import Finalizar from "../botoes/finalizar";
import VoltarAFazer from "../botoes/voltarAFazer";

import { Tarefa } from "../../models/Tarefa";

interface Props{
    tarefa: Tarefa;
}

function Task({tarefa}: Props) {

    return(
        <div className={style.task}>
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
                <Comecar/>
                <VoltarAFazer/>
                <Finalizar/>
            </div>

            

        </div>
    )

    function getFormattedDate(date: Date){
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }
}

export default Task;