import style from "./task.module.scss";
import React, { useState } from "react";

import { Tarefa } from "../../models/Tarefa";



import Salvar from "../botoes/salvar";
import Editar from "../botoes/editar";
import Excluir from "../botoes/Excluir";
import  SubTarefa  from "./SubTarefa";
import {subTarefa} from "../../models/subTarefa";

interface Props{
    tarefa: Tarefa;
    onDragStart?: (tarefa: Tarefa, event: React.DragEvent<HTMLDivElement>) => void;
    atualizarTarefa: () => void;
}

function Task({tarefa,onDragStart,atualizarTarefa,}: Props) {
    const [editando, setEditando] = useState<Boolean>(tarefa.editMode? true : false);
    const [descricao, setDescricao] = useState<string>(tarefa.description);
    const [prazo, setPrazo] = useState<string>(dataParaString(tarefa.deadlineDate));


    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData("text/plain", JSON.stringify(tarefa));
        onDragStart && onDragStart(tarefa, event);
      };

    const handleDescricaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescricao(event.target.value);
      };

    function handlePrazoChange(event: React.ChangeEvent<HTMLInputElement>){
        setPrazo(event.target.value);
    };

    function dataParaString(date:Date){
        const data = new Date(date);
        const dia:string = data.getDate().toString().padStart(2,"0");
        const mes:string = (data.getMonth()).toString().padStart(2,"0");
        const ano:string = data.getFullYear().toString();
        const dataString:string = ano+"-"+mes+"-"+dia;
        return dataString;
        

    }
    
    
    return(
        <div className={style.task} draggable onDragStart={handleDragStart} >
            <span className={style.spanDescricao} onClick={()=> console.log(dataParaString(tarefa.deadlineDate))}>Descrição:</span>
            {!editando && <p className={style.descricao}>{tarefa.description}</p>}
            {editando && <input type="text" className={style.inputDescricao} value={descricao} onChange={handleDescricaoChange} />}
            <div className={style.containerData}>
                <span className={style.spanType}>Criado:</span>
                <span className={style.data}>{new Date(tarefa.createDate).toLocaleDateString("pt-BR")} </span>
            </div>
            <div className={style.containerData}>
                <span className={style.spanType}>Prazo:</span>
                {!editando && <span className={style.data}>{new Date(tarefa.deadlineDate).toLocaleDateString("pt-BR")}</span>}
                {editando && <input type="date" value={prazo} className={style.inputData}  onChange={handlePrazoChange} />}
            </div>
            {tarefa.finishedDate &&  
            <div className={style.containerData}>
                <span className={style.spanType}>Finalizado:</span>
                <span className={style.data}>{new Date(tarefa.finishedDate).toLocaleDateString("pt-BR")}</span>
            </div>}
            <div className={style.containerBotoes}>
                {editando &&<Salvar idTarefa={tarefa.id} prazo={prazo} descricao={descricao} setEditar={setEditando} atualizarTarefa={atualizarTarefa}/>}
                <Editar setEditar={setEditando} editando={editando}/>
                <Excluir/>
            </div>


            {tarefa.subTasks.map((subTask:subTarefa) => (
                <SubTarefa key={subTask.id} subTarefa={subTask} atualizarTarefa={atualizarTarefa} mainId={tarefa.id}/>)
                )}

        </div>
    )



}

export default Task;