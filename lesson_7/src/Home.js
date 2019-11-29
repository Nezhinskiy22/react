import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          It's a home my home page
        </div>
      </Router>
    )
  }
}

export default Home;
