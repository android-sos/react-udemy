import React, {Component} from 'react'

import './Person.css'
// Que son los eventos
// Evento Click() y muta el stado

class Person extends Component {
    state = {
        person: {
            name:'jose',
            age: 15
        }
    }

    pesonOnClick = (name) => {
        this.setState ({person: {
            name: name,
            age: 21
        }});
    }

    render () {

        const style =  {
            backgroudColor: 'white',
            border:'1px solid blue',
            cursor:'pointer'
        }

        return (
            <div className='Person'>  
                <h1>Yo soy {this.state.person.name } de edad: { this.state.person.age}</h1>
                 <p>{this.props.children}</p>
                 <button
                 style={style}
                 onClick={()=> this.pesonOnClick('holaaa') }>Click</button>
            </div>
        )
    }
}

export default Person;