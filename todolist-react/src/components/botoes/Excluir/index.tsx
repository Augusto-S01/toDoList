
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
    deletarTask?: (task: Tarefa) => void;
}

export default function Excluir({atualizarTarefa,mainId,subId,openConfirmDelete,tarefa,deletarTask}: Props){
    return(
        <input type="button" value="Excluir" className={style.excluir} onClick={handleDelete}/> 
    )
    function handleDelete(){
       if(tarefa){
        deletarTask!(tarefa);
       }else{
        if(subId){
            deleteSubTask(subId,mainId).then(() => {
                atualizarTarefa();
            });
       }
    }

 
}
}