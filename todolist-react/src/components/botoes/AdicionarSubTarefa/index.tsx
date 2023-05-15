
import style from './adicionarSubTarefa.module.scss';

interface AdicionarSubTarefaProps{
    openSubModal: () => void;
    mainId: number;
    setIdTarefaAtual : (id: number | undefined) => void;
}

export default function AdicionarSubTarefa({openSubModal,mainId,setIdTarefaAtual}: AdicionarSubTarefaProps){
    function onOpen(){
        setIdTarefaAtual(mainId);
        openSubModal();
        console.log("abrir modal");
    }

    return (
        <input type="button" className={style.adicionarSubTarefa} value="+ Adicionar SubTarefa" onClick={onOpen}/>
    )
}