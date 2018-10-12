import React, { Component } from 'react';

import Person from './Person'

import Radium from 'radium';

class PersonContainer extends Component {

  constructor () {
    super();
    console.log('Constructor')
    this.state = {
      persons: [
       { id:1, name:'jose', lastname:'aaaa'},
       { id:2, name:'pedro', lastname:'aaaa'},
       { id:3, name:'andres', lastname:'aaaa'},
       { id:4, name:'samuel', lastname:'aaaa'},
      ]
    }
  }

  componentWillMount () {
    console.log('Se va a montar el componente')
  }

  componentDidMount () {
    console.log('Se va a monto el componente')
  }


  deletePerson = personIndex => event => {
   this.state.persons.splice(personIndex, 1);
   this.setState({persons: this.state.persons});
   console.log(this.state.persons);
  }


  render() {

    const odd_class = {
      heigth: '24px',
      backgroundColor:'dark-grey',
      ':hover': {
        backgroundColor:'red'
      }
    };
    const none_class = {
      heigth: '24px',
      backgroundColor:'grey'
    };
    const list =  this.state.persons.map((person, index)=>{
      let classes = (index % 2 ) ? odd_class: none_class;

      return (
        <Person 
        id={person.id}
        key={person.id}
        name={person.name} 
        lastname={person.lastname}
        deletePerson={this.deletePerson(index)}
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
