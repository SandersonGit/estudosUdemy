import React from "react";

const UserDatails = ({ nome, idade, profissão }) => {
  return (
    <div>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissão}</li>
      </ul>

      {idade >= 18 ? (
        <p>Pode tirar a carteira de motorista</p>
      ) : (
        <p>Não pode retirar a carta de motorista</p>
      )}
    </div>
  );
};

export default UserDatails;
