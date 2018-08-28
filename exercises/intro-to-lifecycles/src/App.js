import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super()
    this.state = {
      backgroundColor: 'magenta'
    }
  }

  componentDidMount(){
    window.addEventListener("keydown", (e) => {
      console.log(e)
      if(e.code === "ArrowUp"){
        this.setState({
          backgroundColor: 'yellow'
        })
      } else if (e.code === "ArrowRight"){
        this.setState({
          backgroundColor: 'aquamarine'
        })
      } else if (e.code === "ArrowDown"){
        this.setState({
          backgroundColor: 'orange'
        })
      } else if (e.code === 'ArrowLeft'){
        this.setState({
          backgroundColor: 'purple'
        })
      }
    })
  }

  componentWillUnmount(){
    window.removeEventListener("keydown", null)
  }


  render() {
    const styles = {
      container: {
        backgroundColor: this.state.backgroundColor
      },
      title: {
        fontSize: 60,
        color: 'black'
      }
    }
    return (
      <div style={ styles.container }>
        <h1 style={styles.title}>Hello World!</h1>
      </div>
    )
  }
}


export default App;
