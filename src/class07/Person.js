import React, {Component} from 'react'
// Que son los eventos
// Evento Click() y muta el stado

class Person extends Component {
    state = {
        person: {
            name:'jose',
            age: 15
        }
    }

    pesonOnClick = () => {
        this.setState ({person: {
            name:'samuel',
            age: 21
        }});
    }

    render () {
        return (
            <div>
                <h1>Yo soy {this.state.person.name} de edad: { this.state.person.age}</h1>
                 <p>{this.props.children}</p>
                 <button onClick={this.pesonOnClick}>Click</button>
            </div>
        )
    }
}

export default Person;