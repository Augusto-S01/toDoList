import React from 'react';
import style from './header.module.scss';
import NewTask from '../botoes/newTask/newTask';


function Header() {
    return (
        <div className={style.header}>
            <h1 className={style.titulo}>Tarefas</h1>
            <NewTask/>
        </div>

    );
  }
  
  export default Header;
  