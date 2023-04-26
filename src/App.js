import './CSS/App.css';
import Header from './Components/Header';
import Menu from './Components/Menu'
import Introducao from './Components/Introducao'
import Filtro from './Components/Filtro'
import Diferencial from './Components/Diferencial';

import Inscreva from './Components/Inscreva';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Introducao />
      <Filtro />

      <Inscreva />
      <Diferencial />
      <Footer />
    </div>
  );
}

export default App;
