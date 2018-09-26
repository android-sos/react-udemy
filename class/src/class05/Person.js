import React, {Component} from 'react'
// Que es la propieda state
// No esta Incluido en los componentes funciones
// Cada vez que cambio el state hace un rerender
class Person extends Component {
    state = {
        person: {
            name:'jose',
            age: 15
        }
    }
    render () {
        return (
            <div>
                <h1>Yo soy {this.state.person.name} de edad: { this.state.person.age}</h1>
                 <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Person;