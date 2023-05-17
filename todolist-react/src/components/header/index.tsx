import React from 'react';
import style from './header.module.scss';
import NewTask from '../botoes/newTask/newTask';

import { Tarefa } from '../../models/Tarefa';

interface Props{
    openModal: () => void;
}
function Header({openModal}: Props) {
    return (
        <div className={style.header}>
            <h1 className={style.titulo}>Tarefas</h1>
            <NewTask openModal={openModal}/>
        </div>

    );
  }
  
  export default Header;
  