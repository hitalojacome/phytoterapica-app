import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu'
import Introducao from './Components/Introducao'
import Filtro from './Components/Filtro'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Introducao />
      <Filtro />
    </div>
  );
}

export default App;
