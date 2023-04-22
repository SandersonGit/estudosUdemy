import React from "react";
import { useState } from "react";

const ManageData = ()=>{

    const [number, setNumber]= useState(5)

    return (
        <div>

            <p>Valor: {number}</p>
            <button onClick={()=> setNumber(20)} >Mudar numero</button>


        </div>
    )
}

export default ManageData