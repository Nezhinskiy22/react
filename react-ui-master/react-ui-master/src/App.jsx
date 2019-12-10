import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {

    state = { mounted: true }


    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ mounted: false })
    }
    render() {
        return (
            <div className="app">
                <Form onSubmit={this.handleSubmit} />
            </div>
        )
    }
}


export default App;