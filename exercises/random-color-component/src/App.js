import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: ""
    }
  }

  componentDidMount(){
    axios.get("http://www.colr.org/json/color/random").then(response => {
      console.log(response.data.new_color)
      this.setState({
        data: response.data.new_color
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (

      <div style={{backgroundColor: `#${this.state.data}`}}>
        Hello World
      </div>
    );
  }
}

export default App;
