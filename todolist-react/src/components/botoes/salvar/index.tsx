import { Tarefa } from '../../../models/Tarefa';
import { atualizaTarefa } from '../../../services/taskService';
import style from './salvar.module.scss'

import SalvarTarefaDTO from "../../../models/salvarTarefaDTO";


interface Props{
    idTarefa: number;
    descricao: string;
    prazo: string;
    setEditar: (editando: Boolean) => void;
    atualizarTarefa: () => void;
}

function Salvar({idTarefa,descricao,prazo,atualizarTarefa,setEditar}: Props){

    function salvarHandler(){
        const tarefa:SalvarTarefaDTO={
            id: idTarefa,
            description: descricao,
            deadlineDate: new Date(prazo)
        }
    atualizaTarefa(tarefa).then(()=>{
        atualizarTarefa();
        setEditar(false);
    })

    }

    return(
        <input type="button" value="Salvar" className={style.salvar} onClick={salvarHandler}/>
    )
}

export default Salvar;