import React from "react";

const CarDetails = ({ marca, cor,  newCar, km}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>KM: {km} </li>
        <li>Cor: {cor} </li>
      </ul>

      {newCar && <p>Carro novo!</p> }
        {!newCar && <p>Carro Usado</p> }
    </div>
  );
};

export default CarDetails;
