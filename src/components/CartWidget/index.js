import React from 'react'
import {TiShoppingCart} from 'react-icons/ti';

export const Cartwidget = ({count}) => {
  return (
    <div>
      <TiShoppingCart size={35}/>
      <p>{count}</p>
    </div>
   
  )
}
