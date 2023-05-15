
interface AdicionarSubTarefaProps{
    openSubModal: () => void;
    mainId: number;
}

function AdicionarSubTarefa({openSubModal,mainId}: AdicionarSubTarefaProps){
    function onOpen(){
        console.log("abrir modal");
    }

    return (
        <input type="button" className={style.adicionarSubTarefa} value="Adicionar SubTarefa" onClick={onOpen}/>
    )
}