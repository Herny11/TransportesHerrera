import React from 'react'
import { ItemCount } from '../../ItemCount'
import { Item } from '../item'

export const ItemList = ({productos}) => {
  return (
    <div>
        {productos.map(producto=>{
            return  <div>
                <Item producto={producto} key={producto.key}/>
                <ItemCount/>
            </div>    
        })}
    </div>
  )
}
