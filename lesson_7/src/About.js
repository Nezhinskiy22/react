import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


class About extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div>
          It's an about my about page
        </div>
      </Router>
    )
  }
}

export default About;
