import style from "./done.module.scss";
import Task from "../../task";
import { Tarefa } from "../../../models/Tarefa";

interface Props{
    tarefas: Tarefa[];
}

function Done(tarefas : Props) {
    return(
        <div className={style.column}>
            <h1 className={style.doneTitulo}>Done</h1>

            {tarefas.tarefas.map((tarefa) => (
                <Task key={tarefa.id} tarefa={tarefa}/>
            ))}
        </div>
    )
}

export default Done;