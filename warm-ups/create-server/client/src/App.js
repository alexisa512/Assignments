import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
  constructor(){
    super()
    this.state = {
    people: []
    }
  }
  
  componentDidMount(){
    axios.get('/dancers').then(res => {
      this.setState({
        people: res.data
      })
    })
  }


  render() {
    return (
      <div>
        {this.state.people.map(person => <h1 key = {person.id}>{person.firstName}</h1>)}
        
      </div>
    );
  }
}

export default App;
