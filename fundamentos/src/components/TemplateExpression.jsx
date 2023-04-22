import React from "react";
import MyComponents from "./MyComponents";

const TemplateExpression = () => {
  const name = "Sanderson";
  const data = {
    age: 34,
    job: "Programador",
  };

  return (
    <div>
      <p>Olá {name}, tudo bem?</p>
      <p>
        Vc atua como: {data.job} e tem {data.age} anos.
      </p>
      <MyComponents/>
    </div>
  );
};

export default TemplateExpression;
