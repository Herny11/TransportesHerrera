import React, {useEffect, useState} from 'react'
import Maxus from '../../img/Maxus-G10.png'
import { ItemCount } from '../../ItemCount'
import '../ItemsListContainer/styles.css'


export const ItemListContainer = ({greeting, children}) => {

  useEffect (()=>{
    console.log("se monto el componete")
  }, [])
  useEffect(()=>{
    return()=>{
      console.log("Se desmonto el componente")
    }
  })


  return (
    <div>
      <h1>{greeting}</h1>
      {children}
      <hr/>
      <img id="maxus" src= {Maxus}  alt="Maxus"/>
      <ItemCount/>
    </div>
  )
}
