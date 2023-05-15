import React from 'react';
import style from './App.module.scss';
import Header from '../components/header';
import Kanban from '../components/Kanban';

import { Tarefa } from '../models/Tarefa';
import { useEffect, useState } from 'react';
import { atualizaTarefa, getTasks } from '../services/taskService';
import Modal from '../components/Modal';
import SubModal from '../components/SubModal';

function App() {
  const [tarefas,setTarefas] = useState<Tarefa[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSubModalOpen, setSubModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openSubModal = () => {
    setSubModalOpen(true);
  };

  const closeSubModal = () => {
    setSubModalOpen(false);
  };

    
  function atualizarTarefas(){}

  useEffect(() => {
      getTasks().then((response) => {
          setTarefas(response);
      }).catch(() => {
        setTarefas([]);
      });
  }, [atualizarTarefas]);
  return (
    
    <div className={style.App}>
      <Modal onClose={closeModal} isOpen={isModalOpen} atualizarTarefa={atualizarTarefas} />
      <SubModal onClose={closeSubModal} isOpen={isSubModalOpen} atualizarTarefa={atualizarTarefas} />
      <Header atualizarTarefas={atualizarTarefas} tarefas={tarefas} setTarefas={setTarefas} openModal={openModal}/>
      <Kanban atualizarTarefas={atualizarTarefas} tarefas={tarefas} openSubModal={openSubModal}/>

    </div>
  );
}

export default App;
