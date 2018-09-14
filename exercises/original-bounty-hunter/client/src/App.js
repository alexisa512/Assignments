// create a form that allows us to post and delete is a bonus

import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
  constructor(){
    super()
      this.state = {
      bounty: []
      }
  }

  componentDidMount(){
    axios.get('/bounty/').then(res => {
      this.setState({
        bounty: res.data
      })
    })
  }

  render() {
    return (
      <ol>
        {this.state.bounty.map(person => <li key = {person.id}>{person.firstName} {person.lastName}</li>)}
      </ol>
    );
  }
}

export default App;
