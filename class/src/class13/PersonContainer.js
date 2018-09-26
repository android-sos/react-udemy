import React, { Component } from 'react';

import Person from './Person'


class PersonContainer extends Component {

  render() {
    const list =  this.props.persons.map((person, index)=>{
      return (
        <Person 
        key={index}
        name={person.name} 
        age={person.age}
        deletePerson={()=>this.props.deletePerson(index)}
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

export default PersonContainer;
