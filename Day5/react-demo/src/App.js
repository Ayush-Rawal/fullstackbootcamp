import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'
import Interests from './components/Interests'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

    constructor() {
        super();
        this.state = {
            name: "Ayush",
            Image: "http://via.placeholder.com/400x200",
            interests: ["Cricket", "Hockey", "Football", "Salsa"],
            age:18
        }

    }

    render() {
        return ( <div className = "App">
            <h1> Hello React! </h1>     
            <Profile name = { this.state.name } image = { this.state.Image } age = {this.state.age}>
            {/* <h1>Hello</h1>
            <h2>World</h2> */}
            </Profile>
            <Interests interests = { this.state.interests } name = { this.state.name }/>
            </div >
        );
    }
}

export default App;
//It should return interests with for loops