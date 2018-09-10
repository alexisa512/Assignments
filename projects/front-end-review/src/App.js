import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from './redux'

const App = props => {
    console.log(props)
    return (
      <div>
        <button onClick={props.getCharacters}>Get Characters</button>
        {props.characters.map(char => <h1>{char.name}</h1>)}
      </div>
    );
  }
                   // (arg1, arg2)
export default connect(state=>state, { getCharacters })(App);

// arguments ask redux for something
// argument 1: What do you want from your store (state)?
    // state=>state 

    // first state takes all properties from redux state object and puts them in component props object.
    // called map state to props(in App)
// argument 2: What methods do you need from redux?