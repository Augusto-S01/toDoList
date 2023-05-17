
import React from 'react';
import style from './confirmDeleteModal.module.scss';

import { Tarefa } from '../../models/Tarefa';
import { deleteTask } from '../../services/taskService';


interface ModalProps{
    onClose: () => void;
    isOpen: boolean;
    tarefaDeletada: Tarefa | undefined;
    
    tarefas : Tarefa[];
    setTarefas: (tarefas: Tarefa[]) => void;

}

export default function ConfirmDeleteModal({onClose,isOpen,tarefaDeletada,tarefas,setTarefas}: ModalProps){


        React.useEffect(() => {
            document.addEventListener('keydown', handleEsc);
            return () => {
                document.removeEventListener('keydown', handleEsc);
            }
        },[]);
        function handleEsc(e: KeyboardEvent){
            if(e.key === 'Escape'){
                onClose();
            }
        }
        function handleOutsideClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
            if(e.target === e.currentTarget){
                onClose();
            }
        }

        function handlerDelete(){
            if(tarefaDeletada){
                deleteTask(tarefaDeletada.id).then(() => {
                    setTarefas(tarefas.filter((tarefa) => tarefa.id !== tarefaDeletada.id));
                });
                onClose();

            }
        }
       

        if(!isOpen){
            return null;
        }
        return (
        <div className={style.modal} onClick={handleOutsideClick}>
        <div className={style.modal_content}>
          <h2 className={style.titulo}>Atenção!</h2>
            <p className={style.texto}>Excluir essa tarefa também excluira suas sub-tarefas.</p>

            <input type='button' className={style.salvar} value="Confirmar" onClick={handlerDelete} />
            <input type='button' className={style.cancelar} value="Cancelar" onClick={onClose}/>
        </div>
      </div>
    )
}