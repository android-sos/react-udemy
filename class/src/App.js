import React, { Component } from 'react';

import PersonContainer from './class13/PersonContainer'
import './App.css';

class App extends Component {
  state = {
    persons: [
     { name:'jose', age:12},
     { name:'pedro', age:19},
     { name:'andres', age:22},
     { name:'samuel', age:22},
    ]
  }


  deletePerson = (personIndex)=>{   
   this.state.persons.splice(personIndex, 1);
   this.setState({persons: this.state.persons});
  }

  render() {
    return (
      <div className="App">
         <PersonContainer persons={this.state.persons} deletePerson={this.deletePerson}/>
      </div>
    );
  }
}

export default App;
