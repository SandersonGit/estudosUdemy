import "./App.css";
import Ash from "./assets/1150.png"

function App() {
  return (
    <div className="App">
      <h1>Aprofundando em react</h1>{" "}
      <p>
        <b>Saindo das fundações e construindo as vigas de sustentação</b>
      </p>
      {/* como chamar imagens na pasta public */}
      <p>Imagen importada da pasta public</p>
      <img src="/picachu1.png" alt="Picachu" />
      {/* carregar pela pasta assets em src */}

      <div>
        <p>Imagem importada da pasta assets em src</p>
      <img src={Ash} alt="Ash" />
      </div>
    </div>
  );
}

export default App;
