
import React from 'react';
import style from './subtask.module.scss';
import { subTarefa } from '../../../models/subTarefa';
import { useState } from 'react';


import Salvar from '../../botoes/salvar';
import Editar from '../../botoes/editar';
import Excluir from '../../botoes/Excluir';
import { Status } from '../../../enum/status';
import { patchSubTaskDone, patchSubTaskToDO } from '../../../services/subTaskService';
import { patchInProgress } from '../../../services/taskService';
import { patchSubTaskInProgress } from '../../../services/subTaskService';

interface Props{
    subTarefa: subTarefa;
    atualizarTarefa: () => void;
    mainId: number;
}

export default function SubTarefa({subTarefa,atualizarTarefa,mainId}: Props){
    const [editando, setEditando] = useState<Boolean>(false);
    const [descricao, setDescricao] = useState<string>(subTarefa.description);
    const [prazo, setPrazo] = useState<string>(dataParaString(subTarefa.deadlineDate));

    function dataParaString(date:Date){
        const data = new Date(date);
        const dia:string = data.getDate().toString().padStart(2,"0");
        const mes:string = (data.getMonth()).toString().padStart(2,"0");
        const ano:string = data.getFullYear().toString();
        const dataString:string = ano+"-"+mes+"-"+dia;
        return dataString;
    }

    function handlerStatus(event: React.ChangeEvent<HTMLSelectElement>){

        if(subTarefa.status === event.target.value){
            return;
        }


        if(subTarefa.status === Status.TODO){
            patchSubTaskInProgress(subTarefa,mainId).then(() => {
                atualizarTarefa();
            }).catch((err) => {
                console.log(err);
            })
        }
        if(subTarefa.status === Status.IN_PROGRESS){
            patchSubTaskDone(subTarefa,mainId).then(() => {
                atualizarTarefa();
            }).catch((err) => {
                console.log(err);
            })
        }
        if(subTarefa.status === Status.DONE){
            patchSubTaskToDO(subTarefa,mainId).then(() => {
                atualizarTarefa();
            }).catch((err) => {
                console.log(err);
            })
        }
    }


    return(
        <div className={style.task}>
            <div className={style.containerStatus}>
                <select name="subStatus" id="subStatus"   className={`${style.selectStatus} ${
                subTarefa.status === Status.TODO
                ? style.todo
                : subTarefa.status === Status.IN_PROGRESS
                ? style.inProgress
                : subTarefa.status === Status.DONE
                ? style.done
                : ''
            }`} 
                onChange={handlerStatus}>
                    <option value={Status.TODO} selected={subTarefa.status === Status.TODO} className={style.todo} >To Do</option>
                    <option value={Status.IN_PROGRESS} selected={subTarefa.status === Status.IN_PROGRESS} className={style.inProgress}>In Progress</option>
                    <option value={Status.DONE} selected={subTarefa.status === Status.DONE} className={style.done}>Done</option>
                </select>
            </div>
            <span className={style.spanDescricao}>Descrição:</span>
            {!editando && <p className={style.descricao}>{subTarefa.description}</p>}
            {editando && <input type="text" className={style.inputDescricao} value={descricao}  />}
            <div className={style.containerData}>
                <span className={style.spanType}>Criado:</span>
                <span className={style.data}>{new Date(subTarefa.createDate).toLocaleDateString("pt-BR")} </span>
            </div>
            <div className={style.containerData}>
                <span className={style.spanType}>Prazo:</span>
                {!editando && <span className={style.data}>{new Date(subTarefa.deadlineDate).toLocaleDateString("pt-BR")}</span>}
                {editando && <input type="date" value={prazo} className={style.inputData}   />}
            </div>
            {subTarefa.finishedDate &&  
            <div className={style.containerData}>
                <span className={style.spanType}>Finalizado:</span>
                <span className={style.data}>{new Date(subTarefa.finishedDate).toLocaleDateString("pt-BR")}</span>
            </div>}
            <div className={style.containerBotoes}>
                {editando &&<Salvar idTarefa={subTarefa.id} prazo={prazo} descricao={descricao} setEditar={setEditando} atualizarTarefa={atualizarTarefa}/>}
                <Editar setEditar={setEditando} editando={editando}/>
                <Excluir atualizarTarefa={atualizarTarefa} mainId={mainId} subId={subTarefa.id} />
            </div>
        </div>
    )
}
