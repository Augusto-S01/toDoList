
import { deleteSubTask } from '../../../services/subTaskService';
import { deleteTask } from '../../../services/taskService';
import style from './excluir.module.scss';

interface Props{
    atualizarTarefa: () => void;
    mainId: number;
    subId?: number;
}

function Excluir({atualizarTarefa,mainId,subId}: Props){

    function handleDelete(){
        if(subId){
            deleteSubTask(subId,mainId).then(()=>{
                atualizarTarefa();
            }
        )
        }else{
            deleteTask(mainId).then(()=>{
                atualizarTarefa();
            }
            )
        }
    }

    return(
        <input type="button" value="Excluir" className={style.excluir} onClick={handleDelete}/> 
    )
}

export default Excluir;