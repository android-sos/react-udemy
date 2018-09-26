import React from 'react'
// Que son los props
const Person = (props) => {
    return <h1>Yo soy {props.name} de edad: { props.age}</h1>
}

export default Person;