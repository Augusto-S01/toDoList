import React from 'react';
import style from './App.module.scss';
import Header from '../components/header';
import Kanban from '../components/Kanban';

function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Kanban/>

    </div>
  );
}

export default App;
