import React, {Component} from 'react'

import './Person.css'
// Que son los eventos
// Evento Click() y muta el stado

class Person extends Component {

    render () {
        return (
            <div style={this.props.classes}>  
                <h1>Yo soy {this.props.name } de edad: { this.props.age}</h1>
                <button onClick={this.props.deletePerson}>Click</button>
            </div>
        )
    }
}

export default Person;