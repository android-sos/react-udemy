import React, { Component } from 'react';

import Person from './Person'


class PersonContainer extends Component {

  render() {
    const list =  this.props.persons.map((person)=>{
      return (
        <Person name={person.name} age={person.age}/>
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
