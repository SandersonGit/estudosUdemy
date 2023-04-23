import React from "react";

const CasaDetail = ({ nome, metragem, valor }) => {
  

  return (
    <div>
      <h2>Propriedade da casa</h2>
      <ul>
        <li>Nome: {nome} </li>
        <li>Metragem: {metragem}</li>
        <li>Valor: {valor}</li>
        
      </ul>

       

    </div>
  );
};

export default CasaDetail;
