import style from './newTask.module.scss';
import React from 'react';

import { Tarefa } from '../../../models/Tarefa';
import { Status } from '../../../enum/status';

interface Props{
    openModal: () => void;
}



function NewTask({openModal}: Props){

    const handlerNovaTarefa = () => {
        openModal();
    }


    return(
        <input className={style.newTask} type="button" placeholder="Nova tarefa" value="+ Nova Tarefa" onClick={handlerNovaTarefa}/>
    )
}

export default NewTask;