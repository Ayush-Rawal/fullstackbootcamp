import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
    render() {
        return ( <div className = "App">
		<img src={this.props.image} alt="demo"/>
		<h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default Profile;