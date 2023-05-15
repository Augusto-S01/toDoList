import React, { useEffect, useState }  from 'react';
import style from './kanban.module.scss';
import ToDo from '../Columns/toDo';
import InProgress from '../Columns/inProgress';
import Done from '../Columns/done';

import { Tarefa } from '../../models/Tarefa';

import { getTasks } from '../../services/taskService';

function Kanban() {
    const [tarefas,setTarefas] = useState<Tarefa[]>([]); 
    useEffect(() => {
        getTasks().then((response) => {
            setTarefas(response);
        });
    }, []);
    return (
        <div className={style.kanban}>
            <ToDo tarefas={tarefas}/>
            <InProgress tarefas={tarefas}/>
            <Done tarefas={tarefas}/>
        </div>
    );
}

export default Kanban;