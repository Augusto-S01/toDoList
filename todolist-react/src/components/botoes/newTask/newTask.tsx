import style from './newTask.module.scss';
import React from 'react';


function NewTask(){
    return(
        <React.Fragment>
        <input className={style.newTask} type="button" placeholder="Nova tarefa" value="+ Nova Tarefa"/>
        </React.Fragment>
    )
}

export default NewTask;