import React, { Component } from 'react';
import axios from 'axios';
import Person from './Person'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('https://swapi.co/api/people/').then(response => {
      console.log(response)
      this.setState({
        data: response.data.results
      })
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    const mappedStarWarsFolk = this.state.data.map(person => {
      return (
        <Person 
          key={person.url} 
          {...person} />
      )
    }) 

    return (
      <div>
        { mappedStarWarsFolk }
      </div>
    );
  }
}

export default App;
