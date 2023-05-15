import style from "./task.module.scss";
import React from "react";
import Editar from "../botoes/editar";
import Comecar from "../botoes/comecar";
import Finalizar from "../botoes/finalizar";
import VoltarAFazer from "../botoes/voltarAFazer";

function Task() {
    return(
        <div className={style.task}>
            <span className={style.spanDescricao}>Descrição</span>
            <p className={style.descricao}>Lorem ipsum dolo</p>
            <span className={style.status}>Status</span>
            <div className={style.containerCreatedAt}>
                <span className={style.createdAt}>Criado em:</span>
                <span className={style.data}>Data</span>
            </div>
            <div className={style.containerDeadline}>
                <span className={style.deadline}>Prazo:</span>
                <span className={style.data}>Data</span>
            </div>

            <div className={style.containerBotoes}>
                <Editar/>
                <Comecar/>
                <Finalizar/>
                <VoltarAFazer/>
            </div>

            

        </div>
    )
}

export default Task;