import React, { Component } from 'react';
import Login from './components/Login';
import WishList from './components/WishList';
import HaveTraveledTo from './components/HaveTraveledTo';
import { Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Route exact path = "/" component = { Login } /> */}
          <Route path = "/havetraveledto" component = { HaveTraveledTo } /> 
          <Route path = "/wishlist" component = { WishList } />
        </Switch>
      </div>
    );
  }
}

export default App;
