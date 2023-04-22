import React from 'react'

const Events = () => {

const eventTest = (e) => {
    console.log("Evento Executado com sucesso");
}
     
const renderSomething = (x)=>{
    if(x){
        return <h1>Renderizando caso true</h1>
    } else {
        return <h1>Renderizando caso false</h1>
    }
}

  return (
    <div>
        <div>
            <button onClick={eventTest}>Clique aqui</button>
        </div>
        <div>
            <button onClick={()=> console.log("clicou")}>Clique aqui tbm</button>
        </div>
        <div>   
            {/* função de bloco funciona mas não deve estar aqui */}
            <button onClick={()=> {
                if(true){
                    console.log("Isso não pode ser feito por conveção pois polui demais o código limpo e dificulta o entendimento!");
                }
            }}>Clique aqui tbm por favor</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )

}
export default Events