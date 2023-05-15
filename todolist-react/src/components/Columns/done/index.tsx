import style from "./done.module.scss";
import Task from "../../task";
import { Tarefa } from "../../../models/Tarefa";
import { patchDone } from "../../../services/taskService";

interface Props{
    tarefas: Tarefa[];
    atualizaTarefas: () => void;
    openSubModal: () => void;
    setIdTarefaAtual: (id: number | undefined) => void;
}

function Done({tarefas,atualizaTarefas,openSubModal,setIdTarefaAtual} : Props) {

    const handleDragStart = (tarefa: Tarefa) => {
        // Manipule o evento de arrastar aqui, se necessário
        console.log("Tarefa arrastada:", tarefa);
      };
    
      const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const tarefa = JSON.parse(event.dataTransfer.getData("text/plain")) as Tarefa;
        patchDone(tarefa).then(() => {
          atualizaTarefas();
        });
        console.log("Tarefa solta:", tarefa);
      };
    
      const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
      };

    return(
        <div 
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={style.column}>
            <h1 className={style.doneTitulo}>Done</h1>

            {tarefas.map((tarefa) => (
                <Task key={tarefa.id} tarefa={tarefa} onDragStart={handleDragStart} atualizarTarefa={atualizaTarefas} openSubModal={openSubModal} setIdTarefaAtual={setIdTarefaAtual}/>
            ))}
        </div>
    )
}

export default Done;