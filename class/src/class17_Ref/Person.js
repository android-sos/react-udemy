import React, {Component} from 'react'
import './Person.css'
import Radium from 'radium';

// Que son los eventos
// Evento Click() y muta el stado

class Person extends Component {

    constructor() {
        super();
        this.state = {
            name:'',
            lastname:''
        };
        this.onChangeLastName = this.onChangeLastName.bind(this);
    }

    componentWillUnmount() {
       
    }
    
    componentDidMount() {
      this.setState({name: this.props.name, lastname: this.props.lastname});
      this.inputElement.focus();
    }

    onChangedName (e) {
        console.log(e.target);
        this.setState({name: e.target.value});
    }

    onChangeLastName (e) {
        console.log(e.target);
        this.setState({lastname: e.target.value});
    }
  
// this.setState({name: this.props.name});
    render () {
        return (
            <div style={this.props.classes}  >  
                <input type="text" 
                ref ={ (r)=> this.inputElement = r}
                value={this.state.name} 
                onChange={this.onChangedName.bind(this)}>
                </input>
                <input type="text" 
                value={this.state.lastname} 
                onChange={this.onChangeLastName}>
                </input>
                <button key={this.props.id} style={this.props.classes} onClick={this.props.deletePerson}>Click</button>
            </div>
        )
    }
}

export default Radium(Person);