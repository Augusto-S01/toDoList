import React from 'react';
import style from './App.module.scss';
import Header from '../components/header';
import Kanban from '../components/Kanban';

import { Tarefa } from '../models/Tarefa';
import { useEffect, useState } from 'react';
import { atualizaTarefa, deleteTask, getTasks } from '../services/taskService';
import Modal from '../components/Modal';
import SubModal from '../components/SubModal';
import ConfirmDeleteModal from '../components/confirmDeleteModal';

function App() {
  const [tarefas,setTarefas] = useState<Tarefa[]>([]);
  const [IdTarefaAtual, setIdTarefaAtual] = useState<number | undefined>(undefined);
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSubModalOpen, setSubModalOpen] = useState(false);
  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);

  const [tarefaAtual, setTarefaAtual] = useState<Tarefa | undefined>(undefined);

  const [tarefaDeletada , setTarefaDeletada] = useState<Tarefa | undefined>(undefined);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openSubModal = (Tarefa? : Tarefa) => {
    setSubModalOpen(true);
  };

  const closeSubModal = () => {
    setSubModalOpen(false);
  };

  const openConfirmDeleteModal = () => {
    setConfirmDeleteModalOpen(true);
  };
  const closeConfirmDeleteModal = () => {
    setConfirmDeleteModalOpen(false);
  };

  function deletarTarefa(tarefa : Tarefa){
    setTarefaDeletada(tarefa);
    openConfirmDeleteModal();
  }


  function deletarTask(task: Tarefa){
    if(task.subTasks!.length > 0){
      setTarefaDeletada(task);
      openConfirmDeleteModal();
    }else{
      deleteTask(task.id).then((response) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== task.id));
      });
    }
  }
    
  function atualizarTarefas(){}

  useEffect(() => {
      getTasks().then((response) => {
          setTarefas(response);
      })
  }, [atualizarTarefas]);
  return (
    
    <div className={style.App}>
      <Modal 
        onClose={closeModal} 
        isOpen={isModalOpen} 
        setTarefas={setTarefas}
        tarefas={tarefas}
        atualizarTarefa={atualizarTarefas} 
      />
      <SubModal 
        onClose={closeSubModal}  
        isOpen={isSubModalOpen} 
        atualizarTarefa={atualizarTarefas} 
        IdTarefaAtual={IdTarefaAtual}
      />
      <ConfirmDeleteModal 
        onClose={closeConfirmDeleteModal}  
        isOpen={isConfirmDeleteModalOpen}  
        tarefas={tarefas}
        setTarefas={setTarefas}  
        tarefaDeletada={tarefaDeletada}
      />
      <Header 
        openModal={openModal}
      />
      <Kanban 
        atualizarTarefas={atualizarTarefas} 
        tarefas={tarefas} 
        openSubModal={openSubModal} 
        openConfirmDelete={openConfirmDeleteModal} 
        setIdTarefaAtual={setIdTarefaAtual}
        setTarefaAtual={setTarefaAtual}
        deletarTask={deletarTask}
      />

    </div>
  );
}

export default App;
