import React, { useEffect, useState }  from 'react';
import style from './kanban.module.scss';
import ToDo from '../Columns/toDo';
import InProgress from '../Columns/inProgress';
import Done from '../Columns/done';

import { Tarefa } from '../../models/Tarefa';

import { getTasks } from '../../services/taskService';
import { Status } from '../../enum/status';

function Kanban() {
    const [tarefas,setTarefas] = useState<Tarefa[]>([]);
    
    function atualizarTarefas(){}

    useEffect(() => {
        getTasks().then((response) => {
            setTarefas(response);
        });
    }, [atualizarTarefas]);

    return (
        <div className={style.kanban}>
            <ToDo tarefas={filterTasksByStatus(Status.TODO)} />
            <InProgress tarefas={filterTasksByStatus(Status.IN_PROGRESS)} atualizaTarefas={atualizarTarefas}/>
            <Done tarefas={filterTasksByStatus(Status.DONE)}/>
        </div>
    );

    function filterTasksByStatus(status: Status): Tarefa[] {
        return tarefas.filter((tarefa) => tarefa.status === status);
    }
}

export default Kanban;