import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class Profile extends Component {

    constructor(props) {
            super();
            this.state = {
                age: props.age
            }
            this.newsport=""
        }
        // By default the props are read-only

    incAge() {
        this.setState({
            age: this.state.age + 1
        });
        // console.log(this.state.age)
    }

    addNewSport(event){
        this.newsport = event.target.value
    }

    handleClick(){
        this.props.addInterest(this.newsport)
    }

    render() {
        console.log(this.props.children);
        return ( < div className = "App" > { this.props.children } 
        <img src = { this.props.image } alt = "demo"/>
            <h1 className="well"> { this.props.name } ({ this.state.age }) </h1> 
            <button onClick = { this.incAge.bind(this) }> Increase age </button> 
            { /* Pass the definition of function not it's action */ } 
            { /* render is called only when state changes, so when local variables work render is not called again */ } 
            { /* this.incAge.bind(this) bind this(passed) as the this of the function, overwriting the this of the function */ } 
            <button onClick={this.props.handleClick}>Click</button>
            <input onChange={this.newsport}/>
            </div>
        );
    }
}

Profile.propTypes = {
    age: PropTypes.number
}

// Ignore sport related things until you can pull from abhishek's repo

export default Profile;