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

    pesonOnClick = (name) => {
        this.setState ({person: {
            name: name,
            age: 21
        }});
    }

    render () {
        return (
            <div>
                <h1>Yo soy {this.props.name } de edad: { this.props.age}</h1>
                 <p>{this.props.children}</p>
                 <button onClick={this.pesonOnClick.bind(this, 'xxxxx')}>Click</button>
                 <button onClick={()=>this.pesonOnClick('yyyy')}>Click</button>
                 <button onClick={()=> this.props.onClick() }>Click</button>
            </div>
        )
    }
}

export default Person;