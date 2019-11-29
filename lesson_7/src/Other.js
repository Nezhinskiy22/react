import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


class Other extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          404
        </div>
      </Router>
    )
  }
}

export default Other;
