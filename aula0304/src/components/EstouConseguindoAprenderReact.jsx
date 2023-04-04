import React from 'react'

const EstouConseguindoAprenderReact = (props) => {
  return (
    <div>
        
        {props.estouConseguindo ? <h1>Estou indo bem...</h1> : <h1>Não, ainda não estou conseguindo.</h1>}
 
    </div>
  )
}

export default EstouConseguindoAprenderReact