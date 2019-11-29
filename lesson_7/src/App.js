import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contacts from './Contacts';
import Other from './Other';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><a href="/">Main page</a></li>
            <li> <a href="/about">About</a></li>
            <li> <a href="/contacts">Contacts</a></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contacts" component={Contacts}></Route>
            <Route component={Other}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
