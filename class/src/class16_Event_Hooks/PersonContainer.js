import React, { Component } from 'react';

import Person from './Person'

import Radium from 'radium';

class PersonContainer extends Component {

  constructor () {
    super();
    console.log('Constructor')
    this.state = {
      persons: [
       { name:'jose', age:12},
       { name:'pedro', age:19},
       { name:'andres', age:22},
       { name:'samuel', age:22},
      ]
    }
  }

  componentWillMount () {
    console.log('Se va a montar el componente')
  }

  componentDidMount () {
    console.log('Se va a monto el componente')
  }


  deletePerson = (personIndex)=>{
    console.log(personIndex);
   this.state.persons.splice(personIndex, 1);
   this.setState({persons: this.state.persons});
  }


  render() {
    console.log('Metodo render')
    const odd_class = {
      backgroundColor:'dark-grey',
      ':hover': {
        backgroundColor:'red'
      }
    };
    const none_class = {
      backgroundColor:'grey'
    };
    const list =  this.state.persons.map((person, index)=>{
      let classes = (index % 2 ) ? odd_class: none_class;

      return (
        <Person 
        id={index}
        key={index}
        name={person.name} 
        age={person.age}
        deletePerson={()=>this.deletePerson(index)}
        classes={classes}
        />
      )
    });
      
    return (
      <div>
         {list}
      </div>
    );
  }
}

export default Radium(PersonContainer);
