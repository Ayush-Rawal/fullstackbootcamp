import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class Profile extends Component {

    constructor(props) {
            super();
            this.state = {
                age: props.age
            }
        }
        // By default the props are read-only

    incAge() {
        this.setState({
            age: this.state.age + 1
        });
        // console.log(this.state.age)
    }

    render() {
        console.log(this.props.children);
        return ( < div className = "App" > { this.props.children } 
        <img src = { this.props.image } alt = "demo"/>
            <h1> { this.props.name } ({ this.state.age }) </h1> 
            <button onClick = { this.incAge.bind(this) }> Increase age </button> { /* Pass the definition of function not it's action */ } 
            { /* render is called only when state changes, so when local variables work render is not called again */ } 
            { /* this.incAge.bind(this) bind this(passed) as the this of the function, overwriting the this of the function */ } 
            </div>
        );
    }
}

Profile.propTypes = {
    age: PropTypes.number
}

// How to add one more interest (create a button to add interest 1>dummy 2>from user)

export default Profile;