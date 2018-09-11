import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import './components/index.css'


const App = props => {
  console.log(props)
  return (
    <div >
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/bio' component={ Bio } />
        <Route exact path='/gallery' component={ Gallery } />
      </Switch>
    </div>
  );
}

export default withRouter(App);

