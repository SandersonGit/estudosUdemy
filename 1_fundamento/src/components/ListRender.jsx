import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Sanderson", "Melanie", "Maria", "heitor"]);

  const [users, setUsers] = useState([
    {id: 1, name: "Sanderson", age: 34},
    {id: 2, name: "Melanie", age: 32},
    {id: 3, name: "Maria", age: 9}
    
  ])

  const deletRandon = ()=>{
    const randonNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers)=>{
        console.log(prevUsers);
        return prevUsers.filter((user)=> randonNumber !== user.id)
    })

  }

  return (
    <div>
        <h1>Renderização de lista com useState()</h1>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user)=>(
            <li key={user.id}>
                {user.name} - {user.age}
            </li>
        ))}
      </ul>
      <button onClick={deletRandon} >Delete Randon Users</button>



    </div>
  );
};

export default ListRender;
