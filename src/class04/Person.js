import React from 'react'
// Que es la propieda chlidren
// Cada vez que cambiemos un props se hace un rerender
const Person = (props) => {
    return (
        <div>
            <h1>Yo soy {props.name} de edad: { props.age}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;