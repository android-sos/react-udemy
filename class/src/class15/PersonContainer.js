import React, { Component } from 'react';

import Person from './Person'

import Radium from 'radium';

class PersonContainer extends Component {
  
  render() {
    const odd_class = {
      backgroundColor:'dark-grey',
      ':hover': {
        backgroundColor:'red'
      }
    };
    const none_class = {
      backgroundColor:'grey'
    };
    const list =  this.props.persons.map((person, index)=>{
      let classes = (index % 2 ) ? odd_class: none_class;

      return (
        <Person 
        id={index}
        key={index}
        name={person.name} 
        age={person.age}
        deletePerson={()=>this.props.deletePerson(index)}
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
