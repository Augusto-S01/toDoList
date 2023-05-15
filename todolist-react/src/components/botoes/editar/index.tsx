import React from 'react';
import style from './editar.module.scss';

interface Props{
    editando: Boolean;
    setEditar: (editando: Boolean) => void;
}

function Editar({setEditar,editando}: Props) {
  function turnEdit(){
      if(editando){
          setEditar(false)
      }else{
          setEditar(true)
      }
      
  }
  return (
      <input type="button" value="Editar" className={style.editar} onClick={()=> turnEdit()}/>
  );
}




export default Editar;