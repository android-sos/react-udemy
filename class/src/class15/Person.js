import React, {Component} from 'react'
import { ButtonDelete } from './ButtonDelete'
import './Person.css'
import Radium from 'radium';

// Que son los eventos
// Evento Click() y muta el stado

class Person extends Component {

    render () {
        console.log(this.props.key);
        return (
            <div style={this.props.classes}>  
                <h1>Yo soy {this.props.name } de edad: { this.props.age}</h1>
                <ButtonDelete style={this.props.classes} onClick={this.props.deletePerson}>Click</ButtonDelete>
            </div>
        )
    }
}

export default Radium(Person);