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
    axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
      console.log(response)
      this.setState({
        data:response.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const peopleOnHitList = this.state.data.map(person => {
      return (
        <Person key={person.name}
                {...person} />
      )
    })

    return (
      <div >
        {peopleOnHitList}
      </div>
    );
  }
}

export default App;
