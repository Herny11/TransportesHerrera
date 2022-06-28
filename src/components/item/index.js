import React from 'react'
import "./index.css"

export const Item = ({producto}) => {
  return (
      <div className='productos'>
        <p> {producto.titulo} </p>
        <p> {producto.categoria} </p>
        <p> {producto.precio} </p>
        <div>
            {producto.imagen}
        </div>
      </div>
    
  )
}
