
import "./App.css";
import Ash from "./assets/1150.png"
import CarDetails from "./components/CarDetails";
import CasaDetail from "./components/CasaDetail";
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import UserName from "./components/UserName";

function App() {

const casaNome = "Augusta"
const casaMetragem = "100m"
const casaValor = 100.000 
   


  return (
    <div className="App">
      <h1>Aprofundando em react</h1>{" "}
      <p>
        <b>Saindo das fundações e construindo as vigas de sustentação</b>
      </p>
      <h1>Importando imagens no React</h1>
      {/* como chamar imagens na pasta public */}
      <p>Imagen importada da pasta public</p>
      <img src="/picachu1.png" alt="Picachu" />
      {/* carregar pela pasta assets em src */}

      <div>
        <p>Imagem importada da pasta assets em src</p>
      <img src={Ash} alt="Ash" />
      </div>

      <h1>UseState</h1>
      <ManageData/>

      <ListRender/>

      <CondicionalRender/>

      <UserName name= "Sanderson" age= "35"/>

      <CarDetails marca="VW" km={10.000} cor= "Branco" />

      <CasaDetail nome= {casaNome} metragem ={casaMetragem} valor={casaValor}/>

    </div>
  );
}

export default App;
