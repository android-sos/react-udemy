import React, {Component} from 'react'

import './Person.css'
import Radium from 'radium';

// Que son los eventos
// Evento Click() y muta el stado

class Person extends Component {

    render () {
        console.log(this.props.key);
        return (
            <div key={this.props.id} style={this.props.classes}>  
                <h1>Yo soy {this.props.name } de edad: { this.props.age}</h1>
                <button style={this.props.classes} onClick={this.props.deletePerson}>Click</button>
            </div>
        )
    }
}

export default Radium(Person);