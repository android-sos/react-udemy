import React, {Component} from 'react'
import { ButtonDelete } from './ButtonDelete'
import './Person.css'
import Radium from 'radium';

// Que son los eventos
// Evento Click() y muta el stado

class Person extends Component {
    name = '';
    constructor() {
        super();
    }

    componentWillUnmount() {
        console.log('Removed!'+ this.name);
    }
    
    
    render () {
        this.name = this.props.name;
        return (
            <div style={this.props.classes}>  
                <h1>Yo soy {this.props.name } de edad: { this.props.age}</h1>
                <ButtonDelete {...this.props}>Click</ButtonDelete>
            </div>
        )
    }
}

export default Radium(Person);