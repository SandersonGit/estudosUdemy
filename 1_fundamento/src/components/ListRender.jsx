import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Sanderson", "Melanie", "Maria", "heitor"]);
  return (
    <div>
        <h1>Renderização de lista com useState()</h1>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>


      
    </div>
  );
};

export default ListRender;
