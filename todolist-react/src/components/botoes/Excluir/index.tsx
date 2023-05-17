
import { deleteSubTask } from '../../../services/subTaskService';
import { deleteTask } from '../../../services/taskService';
import style from './excluir.module.scss';
import { Tarefa } from '../../../models/Tarefa';

interface Props{
    atualizarTarefa: () => void;
    mainId: number;
    subId?: number;
    openConfirmDelete?: () => void;
    tarefa?: Tarefa | undefined;
    setTarefaAtual?: (tarefa: Tarefa | undefined) => void;
}

export default function Excluir({atualizarTarefa,mainId,subId,openConfirmDelete,tarefa,setTarefaAtual}: Props){
    return(
        <input type="button" value="Excluir" className={style.excluir} onClick={handleDelete}/> 
    )
    function handleDelete(){
        if(setTarefaAtual){
            setTarefaAtual(tarefa);
        }
        if(tarefa){
            if(tarefa.subTasks.length > 0){
                if(openConfirmDelete){
                    openConfirmDelete();
                }
        }else{
            deleteTask(mainId).then(() => {
                atualizarTarefa();
            }).catch((err) => {
                console.log(err);
            })
        }
        if(subId){
            deleteSubTask(mainId,subId).then(() => {
                atualizarTarefa();
            }).catch((err) => {
                console.log(err);
            })
        }
    }

 
}
}