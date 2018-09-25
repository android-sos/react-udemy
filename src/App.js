import React, { Component } from 'react';

import PersonContainer from './class13/PersonContainer'
import './App.css';

class App extends Component {
  state = {
    persons: [
     { name:'jose', age:12},
     { name:'pedro', age:19},
     { name:'andres', age:22},
    ]
  }

  render() {
    return (
      <div className="App">
         <PersonContainer persons={this.state.persons}/>
      </div>
    );
  }
}

export default App;
