import React from 'react'

const Events = () => {

const eventTest = (e) => {
    console.log("Evento Executado com sucesso");
}
     

  return (
    <div>
        <div>
            <button onClick={eventTest}>Clique aqui</button>
        </div>
    </div>
  )

}
export default Events