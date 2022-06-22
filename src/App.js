
import './App.css';
import {NavBar} from './components/NavBar'
import {Input} from './components/Input'
import { ItemListContainer } from './containers/ItemsListContainer';
import {useState} from 'react'

function App() {
  const [containerVisible, setContainerVisible] = useState(true);
  const onHideContainer = () => {
    setContainerVisible(false)
    if(containerVisible == false) setContainerVisible(true)
  }
  return (
    <div className="App">
      <NavBar/>
      {containerVisible? <ItemListContainer greeting={"Transportes Herrera"}>
        <Input valorInput={"Hola"} title={"Nombre"}/>
      </ItemListContainer>:
      null
      }
      <button type="button" onClick={onHideContainer}> click hide</button>
    </div>
  );
}

export default App;
