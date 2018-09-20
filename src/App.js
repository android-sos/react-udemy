import React, { Component } from 'react';

import Person from './class09/Person'
import './App.css';

class App extends Component {
  state = {
    name:''
  }
  changeName = () => {
    this.setState({name:'DDDD'});
    console.log('sasas');
  }

  render() {

    return (
      <div className="App">
        
        <Person name='samuel' age='12'>Me gusta el Futbol</Person>
        <Person name={this.state.name} onClick = { this.changeName} />
        <Person/>
        <Person/>
        <Person/>
      </div>
    );
  }
}

export default App;
