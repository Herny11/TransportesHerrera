import React from 'react';
import './styles.css';

export const Input = ({valorInput, title}) => {
  
    
  return (
    <div>
        <label for="">{title}</label>
        <input type="text" placeholder={valorInput} className='app-input'/>
    </div>
      )
    
}
