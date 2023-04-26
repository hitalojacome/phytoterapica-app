import './CSS/App.css';
import Header from './Components/Header';
import Menu from './Components/Menu'
import Introducao from './Components/Introducao'
import Filtro from './Components/Filtro'
import Diferencial from './Components/Diferencial';
import Produtos from './Components/Produtos'
import Inscreva from './Components/Inscreva';
import Footer from './Components/Footer'
import Footer2 from './Components/Footer2';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />

      <Introducao />
      <Filtro />

      <div className='container'>
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155798/oleo-essencial-lavanda-10ml-phytoterapica-01.jpg?v=1768949610" nome="Lavanda (gt.França)" valor="R$ 60,00" parcelas="20,00" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155806/oleo-essencial-hortela-pimenta-10ml-phytoterapica-01.jpg?v=1768940857" nome="Hortelã-Pimenta (Menta)" valor="R$ 52,00" parcelas="17,33" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/156060/_leo_essencial_de_canela_cassia_10ml_-_phytoterapica_1_.jpg?v=1768938844" nome="Canela Cássia" valor="R$ 50,00" parcelas="16,66" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155422/_leo_essencial_de_tangerina_10ml_-_phytoterapica_1_.jpg?v=637653643519830000" nome="Tangerina" valor="R$ 32,00" parcelas="10,66" />
      </div>

      <div className='container'>
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155574/_leo_essencial_de_grapefruit_10ml_-_phytoterapica.jpg?v=637656035126000000" nome="Grapefruit" valor="R$ 56,00" parcelas="18,66" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155742/oleo-essencial-lavanda-bulgaria-10ml-phytoterapica-caixa.jpg?v=637717257726770000" nome="Lavanda (gt. Bulgária)" valor="R$ 60,00" parcelas="20,00" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155738/oleo-essencial-manjericao-10ml-phytoterapica-caixa.jpg?v=637717166545830000" nome="Manjericão (qt. Methil Chavicol)" valor="R$ 38,00" parcelas="12,66" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155820/oleo-essencial-eucalipto-globulus-10ml-phytoterapica-01.jpg?v=637725633480370000" nome="Eucalipto Globulus" valor="R$ 35,20" parcelas="11,73" />
      </div>

      <div className='container'>
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155808/oleo-essencial-melaleuca-tea-tree-10ml-phytoterapica-01.jpg?v=637725610656700000" nome="Melaleuca (Tea Tree)" valor="R$ 50,00" parcelas="16,66" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155624/oe_eucalipto_com_caixa_10ml_2.jpg?v=637656081329530000" nome=" Eucalipto Staigeriana" valor="R$ 32,00" parcelas="10,67" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155424/_leo_essencial_de_tomilho_branco_10ml_-_phytoterapica_1_.jpg?v=637653648001470000" nome="Tomilho (qt. Timol)" valor="R$ 54,00" parcelas="18,00" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155753/oleo-essencial-litsea-cubeba-10ml-phytoterapica-01.jpg?v=637725566405770000" nome=" Litsea Cubeba (May Chang)" valor="R$ 40,00" parcelas="13,33" />
      </div>

      <div className='container'>
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155550/_leo_essencial_de_citronela_org_nico_10ml_-_phytoterapica_2__1.jpg?v=637655991850400000" nome="Citronela (Orgânico)" valor="R$ 29,00" parcelas="9,66" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/156047/_leo_essencial_de_eucalipto_citriodora_org_nico_10ml_-_phytoterapica_1_.jpg?v=638005132223330000" nome="Eucalipto Citriodora (Orgânico)" valor="R$ 35,40" parcelas="11,80" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155468/_leo_essencial_de_mandarina_vermelha_org_nico_10ml_-_phytoterapica_1_.jpg?v=637655097713870000" nome="Mandarina Vermelha (Orgânico)" valor="R$ 58,00" parcelas="19,33" />
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155552/oleo-essencial-lemongrass-organico-10ml-phytoterapica-caixa.jpg?v=637655992663170000" nome="Lemongrass (Orgânico)" valor="R$ 39,00" parcelas="13,00" />
      </div>

      <Inscreva />
      <Diferencial />

      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
