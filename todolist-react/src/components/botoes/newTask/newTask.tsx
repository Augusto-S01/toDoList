import style from './newTask.module.scss';
import React from 'react';

import { Tarefa } from '../../../models/Tarefa';
import { Status } from '../../../enum/status';

interface Props{
    atualizarTarefas: () => void;
    tarefas : Tarefa[];
    setTarefas: (tarefas: Tarefa[]) => void;
}



function NewTask({atualizarTarefas,tarefas,setTarefas}: Props){

    const handlerNovaTarefa = () => {

    }


    return(
        <input className={style.newTask} type="button" placeholder="Nova tarefa" value="+ Nova Tarefa" onClick={handlerNovaTarefa}/>
    )
}

export default NewTask;