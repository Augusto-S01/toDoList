import React from 'react';
import style from './kanban.module.scss';
import ColumnToDo from '../Columns/toDo';

function Kanban() {
    return (
        <div className={style.kanban}>
            <ColumnToDo/>
        </div>
    );
}

export default Kanban;