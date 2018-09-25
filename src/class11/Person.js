import React, {Component} from 'react'

import './Person.css'
// Que son los eventos
// Evento Click() y muta el stado

class Person extends Component {
    render () {
        return (
            <div className='Person'>  
                <h1>Yo soy {this.props.name } de edad: { this.props.age}</h1>
            </div>
        )
    }
}

export default Person;