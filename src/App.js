
import './App.css';
import {NavBar} from './components/NavBar'
import { ItemListContainer } from './containers/ItemsListContainer';
import {useState} from 'react'

function App() {
  const [containerVisible, setContainerVisible] = useState(true);
  const [boton, setBoton] = useState("hide")
  const onHideContainer = () => {
    setBoton("seek")
    setContainerVisible(false)
    if(containerVisible == false){
      setBoton("hide")
      setContainerVisible(true)
    } 
  }
  return (
    <div className="App">
      <NavBar/>
      {containerVisible? <ItemListContainer greeting={"Transportes Herrera"}>
      </ItemListContainer>:
      null
      }
      <button type="button" onClick={onHideContainer}> click  {boton}</button>
    </div>
  );
}

export default App;
