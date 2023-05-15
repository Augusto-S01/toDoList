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
    setIdTarefaAtual: (id: number | undefined) => void;

}


function Kanban({atualizarTarefas,tarefas,openSubModal,setIdTarefaAtual}: Props) {
    return (
        <div className={style.kanban}>
            <ToDo tarefas={filterTasksByStatus(Status.TODO)} atualizaTarefas={atualizarTarefas} openSubModal={openSubModal} setIdTarefaAtual={setIdTarefaAtual}/>
            <InProgress tarefas={filterTasksByStatus(Status.IN_PROGRESS)} atualizaTarefas={atualizarTarefas} openSubModal={openSubModal} setIdTarefaAtual={setIdTarefaAtual}/>
            <Done tarefas={filterTasksByStatus(Status.DONE)} atualizaTarefas={atualizarTarefas} openSubModal={openSubModal} setIdTarefaAtual={setIdTarefaAtual}/>
        </div>
    );

    function filterTasksByStatus(status: Status): Tarefa[] {
        return tarefas.filter((tarefa) => tarefa.status === status);
    }
}

export default Kanban;