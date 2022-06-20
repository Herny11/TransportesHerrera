
import './App.css';
import {NavBar} from './components/NavBar'
import {Input} from './components/Input'
import { ItemListContainer } from './containers/ItemsListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Transportes Herrera"}>
        <Input valorInput={"Hola"} title={"Nombre"}/>
      </ItemListContainer>
    </div>
  );
}

export default App;
