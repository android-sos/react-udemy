import React, { Component } from 'react';
import './App.css';

const CharComponet = (props)=> {
  const st= {
    width: '50%',
    border: '1px  solid gray',
    margin: '18px',
    padding: '16px'

  }
  return (
     <div>
       {
          [...props.text||''].map((c, index)=>{
           return (
            <div key={index} style={st}>
            {c}
           </div>
           )
         })
       }
       </div>
    )
} 
const ValidationComponent = (props)=> {

  return(
    <div>
      {props.lenght}
      {
        (props.lenght <= 5) ? 
        (
          <div>
            Is to Short
          </div>
        )
        :(
          <div>
            Is Fine
          </div>
        )
      }
    </div>
    
  )
}

class App extends Component {
  state = {
    text:''
  }
  changeTextHandle = (e) => {
    console.log(e.target.value)
    this.setState({text:e.target.value});
  }
  render() {
    const {text}= this.state;
    return (
      <div className="App">
         <input type='text' onChange={this.changeTextHandle}/>
         <ValidationComponent lenght={text.length}/>
         <CharComponet text = {text}/>
      </div>
    );
  }
}

export default App;
