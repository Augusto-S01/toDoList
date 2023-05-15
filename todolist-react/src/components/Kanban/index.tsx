import React, { useEffect, useState }  from 'react';
import style from './kanban.module.scss';
import ToDo from '../Columns/toDo';
import InProgress from '../Columns/inProgress';
import Done from '../Columns/done';

import { Tarefas } from '../../models/Tarefas';

import { getTasks } from '../../services/taskService';

function Kanban() {
    const [tarefas,setTarefas] = useState<Tarefas[]>([]); 
    return (
        <div className={style.kanban}>
            <ToDo tarefas={tarefas}/>
            <InProgress/>
            <Done/>
        </div>
    );
}

export default Kanban;