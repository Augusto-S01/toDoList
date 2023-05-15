import React, { useEffect, useState }  from 'react';
import style from './kanban.module.scss';
import ToDo from '../Columns/toDo';
import InProgress from '../Columns/inProgress';
import Done from '../Columns/done';

import { Tarefa } from '../../models/Tarefa';

import { getTasks } from '../../services/taskService';
import { Status } from '../../enum/status';

interface Props{
    tarefas: Tarefa[];
    atualizarTarefas: () => void;
    openSubModal: () => void;

}


function Kanban({atualizarTarefas,tarefas,openSubModal}: Props) {
    return (
        <div className={style.kanban}>
            <ToDo tarefas={filterTasksByStatus(Status.TODO)} atualizaTarefas={atualizarTarefas} openSubModal={openSubModal}/>
            <InProgress tarefas={filterTasksByStatus(Status.IN_PROGRESS)} atualizaTarefas={atualizarTarefas} openSubModal={openSubModal}/>
            <Done tarefas={filterTasksByStatus(Status.DONE)} atualizaTarefas={atualizarTarefas} openSubModal={openSubModal}/>
        </div>
    );

    function filterTasksByStatus(status: Status): Tarefa[] {
        return tarefas.filter((tarefa) => tarefa.status === status);
    }
}

export default Kanban;