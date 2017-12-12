import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'
import Interests from './components/Interests'

class App extends Component {

    constructor(){
        super();
        this.state= {
            name:"",
            Image:""
        }
        
    }

    render() {
        let interest = '';
        return ( < div className = "App" >
            <h1> Hello React! </h1>    
            <Profile/>
            <Interests name="Ayush" image={this.state.Image}/>
            </div >
        );
    }
}

export default App;
//It should return interests with for loops