import React, { Component } from 'react';

import Person from './class11/Person'
import './App.css';

class App extends Component {
  state = {
    person: [
     { name:'jose', age:12},
     { name:'pedro', age:19},
     { name:'andres', age:22},
    ]
  }


  render() {

    return (
      <div className="App">
         {
            this.state.person.map((person)=>{
              return (
                <Person name={person.name} age={person.age}/>
              )
            })
         }
      </div>
    );
  }
}

export default App;
