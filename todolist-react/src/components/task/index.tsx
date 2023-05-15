import style from "./task.module.scss";
import React from "react";
import Editar from "../botoes/editar";
import Comecar from "../botoes/comecar";
import Finalizar from "../botoes/finalizar";
import VoltarAFazer from "../botoes/voltarAFazer";

function Task() {
    return(
        <div className={style.task}>
            <span className={style.spanDescricao}>Descrição:</span>
            <p className={style.descricao}>Lorem ipsum dolor  consequatur tempore provident molestias!</p>
            <div className={style.containerData}>
                <span className={style.spanType}>Criado:</span>
                <span className={style.data}>16/04/2013</span>
            </div>
            <div className={style.containerData}>
                <span className={style.spanType}>Prazo:</span>
                <span className={style.data}>16/04/2013</span>
            </div>
            <div className={style.containerData}>
                <span className={style.spanType}>Finalizado:</span>
                <span className={style.data}>16/04/2013</span>
            </div>
            <div className={style.containerBotoes}>
                <Editar/>
                <Comecar/>
                <VoltarAFazer/>
                <Finalizar/>
            </div>

            

        </div>
    )
}

export default Task;