
import React from 'react';
import style from './modal.module.scss';
import SalvarTarefaDTO from '../../models/salvarTarefaDTO';
import { postTask } from '../../services/taskService';
import { Tarefa } from '../../models/Tarefa';

interface ModalProps{
    onClose: () => void;
    isOpen: boolean;
    atualizarTarefa: () => void;
    setTarefas: (tarefas : Tarefa[]) => void;
    tarefas : Tarefa[];
}

export default function Modal({onClose,isOpen,setTarefas,tarefas}: ModalProps){
    const [description, setDescription] = React.useState('');
    const [deadlineDate, setDeadlineDate] = React.useState('');


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

        function handlerDescription(e: React.ChangeEvent<HTMLInputElement>){
            setDescription(e.target.value);
        }

        function saveTask(){
            if(description === '' || deadlineDate === ''){
                return;
            }
            const task: SalvarTarefaDTO = {
                description: description,
                deadlineDate: new Date(deadlineDate)
            }
            postTask(task).then((response) => {
                setDescription('');
                setDeadlineDate('');
                onClose();
                if(response.id){
                    const tarefa: Tarefa = {
                        id: response.id,
                        description: response.description,
                        deadlineDate: response.deadlineDate,
                        finishedDate: response.finishedDate,
                        createDate: response.createDate,
                        status: response.status,
                        subTasks: response.subTasks
                    }
                    console.log(tarefa)
                    setTarefas([...tarefas, tarefa]);
                }
            })
        }

        function handleOutsideClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
            if(e.target === e.currentTarget){
                onClose();
            }
        }

        function handlePrazoChange(event: React.ChangeEvent<HTMLInputElement>){
            setDeadlineDate(event.target.value);
        };


        if(!isOpen){
            return null;
        }
        return (
        <div className={style.modal} onClick={handleOutsideClick}>
        <div className={style.modal_content}>
          <h2 className={style.titulo}>Nova Tarefa</h2>
          <div className={style.containerDescricao}>
            <p className={style.descricao}>Descrição:</p>
            <input type="text" className={style.inputDescricao} value={description} onChange={handlerDescription} />
          </div>
          <div className={style.containerData}>
            <p className={style.deadline}>Prazo:</p>
            <input type="date" className={style.inputDeadline} value={deadlineDate} onChange={handlePrazoChange}/>
        </div>
            <input type='button' className={style.salvar} value="Salvar" onClick={saveTask}/>
            <input type='button' className={style.cancelar} value="Cancelar" onClick={onClose}/>
        </div>
      </div>
    )
}