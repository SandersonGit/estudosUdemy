import "./App.css";
import Ash from "./assets/1150.png";
import CarDetails from "./components/CarDetails";

import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import UserName from "./components/UserName";

function App() {
  const cars = [
    { id: 1, marca: "Ferrari", cor: "vermelho", newCar: true, km: 0 },
    { id: 2, marca: "Ford", cor: "preto", newCar: false, km: 1000 },
    { id: 3, marca: "Kia", cor: "amarelo", newCar: true, km: 0 },
  ];

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
      <ManageData />
      <ListRender />
      <CondicionalRender />
      <UserName name="Sanderson" age="35" />
      <CarDetails marca="VW" km={10.0} cor="Branco" newCar={false} />
      <CarDetails marca="Ford" km={3.0} cor="Azul" newCar={false} />
      <CarDetails marca="Peugeot" km={0} cor="Vermelho" newCar={true} />
      <CarDetails marca="Toyota" km={45.0} cor="Branco" newCar={false} />
      {/* loop em array de objetos */}
      <h1>Renderização com maps em array de objetos</h1>
      {cars.map((car) => {
        return(
        <CarDetails
          marca={car.marca}
          cor={car.cor}
          km={car.km}
          newCar={car.newCar}
        />)
      })}
    </div>
  );
    }

export default App;
