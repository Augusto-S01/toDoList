import style from './newTask.module.scss';
import React from 'react';


function NewTask(){
    return(
        <input className={style.newTask} type="button" placeholder="Nova tarefa" value="+ Nova Tarefa"/>
    )
}

export default NewTask;