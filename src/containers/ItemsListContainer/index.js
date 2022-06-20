import React from 'react'
import Maxus from '../../img/Maxus-G10.png'
import '../ItemsListContainer/styles.css'

export const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <img id="maxus" src= {Maxus}  alt="Maxus"/>
    </div>
  )
}
