import React, { Component } from 'react';

import Person from './class07/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Person name='samuel' age='12'>Me gusta el Futbol</Person>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
      </div>
    );
  }
}

export default App;
