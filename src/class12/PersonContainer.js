import React, { Component } from 'react';

import Person from './Person'


class PersonContainer extends Component {

  render() {

    return (
      <div>
         {
            this.props.persons.map((person)=>{
              return (
                <Person name={person.name} age={person.age}/>
              )
            })
         }
      </div>
    );
  }
}

export default PersonContainer;
