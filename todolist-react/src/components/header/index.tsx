import React from 'react';
import style from './header.module.scss';
import NewTask from '../botoes/newTask/newTask';

import { Tarefa } from '../../models/Tarefa';

interface Props{
    atualizarTarefas: () => void;
    tarefas : Tarefa[];
    setTarefas: (tarefas: Tarefa[]) => void;
}
function Header({atualizarTarefas,setTarefas,tarefas}: Props) {
    return (
        <div className={style.header}>
            <h1 className={style.titulo}>Tarefas</h1>
            <NewTask atualizarTarefas={atualizarTarefas} tarefas={tarefas} setTarefas={setTarefas}/>
        </div>

    );
  }
  
  export default Header;
  