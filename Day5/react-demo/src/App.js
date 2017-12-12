import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'
import Interests from './components/Interests'

class App extends Component {

    constructor() {
        super();
        this.state = {
            name: "Ayush",
            Image: "http://loremipsum.com/400/200",
            interests: ["Cricket", "Hockey", "Football", "Salsa"]
        }

    }

    render() {
        return ( < div className = "App" >
            <h1 > Hello React! </h1>     <
            Profile name = { this.state.name }
            image = { this.state.Image }/>
            <Interests interests = { this.state.interests } name = { this.state.name }/>
            </div >
        );
    }
}

export default App;
//It should return interests with for loops