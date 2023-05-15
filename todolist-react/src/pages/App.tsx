import React from 'react';
import style from './App.module.scss';
import Header from '../components/header';
import Kanban from '../components/Kanban';

import { Tarefa } from '../models/Tarefa';
import { useEffect, useState } from 'react';
import { getTasks } from '../services/taskService';

function App() {
  const [tarefas,setTarefas] = useState<Tarefa[]>([]);
    
  function atualizarTarefas(){}

  useEffect(() => {
      getTasks().then((response) => {
          setTarefas(response);
      });
  }, [atualizarTarefas]);
  return (
    
    <div className={style.App}>
      <Header atualizarTarefas={atualizarTarefas} tarefas={tarefas} setTarefas={setTarefas}/>
      <Kanban atualizarTarefas={atualizarTarefas} tarefas={tarefas}/>

    </div>
  );
}

export default App;
