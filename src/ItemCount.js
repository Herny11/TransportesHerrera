import React, { useState } from 'react';
import { Cartwidget } from './components/CartWidget';


export const  ItemCount = ()=> {
  const [count, setCount] = useState(0);
  const stock = 7;
  const initial = 1;

  const onOut = () =>{
    if (count>initial) setCount(count-1)
  }
  const onAdd = () => {
    if (count<stock) setCount(count+1)
  }
  const handleAdd =()=>{
    if(count< initial)alert ("No ah añadido ningun pasajero")
    else alert("Se añadieron " + count + " pasarejos")
  }
  return (
    <div>
      <Cartwidget count={count}/>
      <button onClick={onOut}>-</button>
      <button onClick={onAdd}>+</button>
      <button onClick={handleAdd}>
        Añadir Pasajeros
      </button>
      
    </div>
  );
}