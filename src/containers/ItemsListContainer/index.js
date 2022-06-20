import React from 'react'
import Maxus from '../../img/Maxus-G10.png'
import '../ItemsListContainer/styles.css'

export const ItemListContainer = ({greeting, children}) => {
  return (
    <div>
      <h1>{greeting}</h1>
      {children}
      <hr/>
      <img id="maxus" src= {Maxus}  alt="Maxus"/>
    </div>
  )
}
