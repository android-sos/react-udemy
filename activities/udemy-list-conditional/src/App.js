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
            <div key={index} style={st} onClick={()=>props.delete(index)}>
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
  deleteCharHandle = (index) => {
   console.log(index);
   let newText= [...this.state.text];
   newText.splice(index,1);
   this.setState({text: newText.join('')})
  }

  changeTextHandle = (e) => {
    this.setState({text:e.target.value});
  }

  render() {
    const {text}= this.state;
    return (
      <div className="App">
         <input type='text' onChange={this.changeTextHandle} value={this.state.text}/>
         <ValidationComponent lenght={text.length}/>
         <CharComponet text = {text} delete={this.deleteCharHandle}/>
      </div>
    );
  }
}

export default App;
