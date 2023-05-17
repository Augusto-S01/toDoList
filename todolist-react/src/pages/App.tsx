import React from 'react';
import style from './App.module.scss';
import Header from '../components/header';
import Kanban from '../components/Kanban';

import { Tarefa } from '../models/Tarefa';
import { useEffect, useState } from 'react';
import { atualizaTarefa, getTasks } from '../services/taskService';
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
        atualizarTarefa={atualizarTarefas}   
        tarefaAtual={tarefaAtual}
      />
      <Header 
        atualizarTarefas={atualizarTarefas} 
        tarefas={tarefas} 
        setTarefas={setTarefas} 
        openModal={openModal}
      />
      <Kanban 
        atualizarTarefas={atualizarTarefas} 
        tarefas={tarefas} 
        openSubModal={openSubModal} 
        openConfirmDelete={openConfirmDeleteModal} 
        setIdTarefaAtual={setIdTarefaAtual}
        setTarefaAtual={setTarefaAtual}
      />

    </div>
  );
}

export default App;
