import React from 'react'
// Salida de Contenido dinamico
const Person = () => {
    return <h1>Soy una Persona de edad: { Math.floor(Math.random() *20)}</h1>
}

export default Person;