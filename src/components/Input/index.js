import React from 'react';
import './styles.css';

export const Input = ({valorInput, title}) => {
  
    
  return (
    <div>
        <label htmlFor=''>{title}</label>
        <input type="text" placeholder={valorInput} className='app-input'/>
    </div>
      )
    
}
