import React, {useEffect, useState} from 'react'
import { ItemList } from '../../components/itemList'
import Maxus from '../../img/Maxus-G10.png'
import { ItemCount } from '../../ItemCount'
import '../ItemsListContainer/styles.css'


export const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState(null)

  useEffect (()=>{
    const getProductos = async()=>{
      try{
        const response = await fetch('./data.json');
        const data = await response.json();
        console.log(data);
        setProductos(data);
      }catch(error){
        console.log("hubo un error " + error);

      }
    }
    getProductos();
    
  }, [])
  console.log(productos)
 


  return (
    <div>
      <h1>{greeting}</h1>
      <hr/>
      <img id="maxus" src= {Maxus}  alt="Maxus"/>
      {productos?<ItemList productos={productos}/>
      :null
      }
    </div>
  )
}
