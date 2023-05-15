import style from "./inProgress.module.scss";
import Task from "../../task";

import { Tarefa } from "../../../models/Tarefa";


interface Props{
    tarefas: Tarefa[];
}
function inProgress( tarefas: Props) {
    return(
        <div className={style.column}>
            <h1 className={style.inProgressTitulo}>in Progress</h1>

            {tarefas.tarefas.map((tarefa) => (
                <Task key={tarefa.id} tarefa={tarefa}/>
            ))}
        </div>
    )
}

export default inProgress;