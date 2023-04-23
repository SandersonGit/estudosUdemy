import { useState } from "react"

const CondicionalRender = ()=> {

    // tudo dependo de x for true ou false

    const [x] = useState(true)

    const [name, setName] = useState("Tiago")

    return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p> }
        {/* {!x && <p>Agora x é falso então vai ser renderizado</p> } */}
        {/* essa é uma forma basica */}

        <h1>If ternário</h1>

        {name === "João" ? (
            <div><p>O nome é joão</p></div>
        ) : ( <div><p>Nome não encontrado</p></div> )
    }

    <button onClick={()=> setName("João")} >Clique aqui</button>



</div>
)} 

export default CondicionalRender