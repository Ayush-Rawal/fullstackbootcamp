import React, { Component } from 'react';
import './App.css';

class Interest extends Component {
    // printinterest(element) {
    // 	return (<li>element</li>)
    // }
    render() {
            return ( < div className = "App" >
                    <h1 > Interests of { this.props.name }: </h1>  
                    <ul>{
                        this.props.interests.map(name => <li>{name}</li>)} 
                        </ul>					
                        </div>);
                        }
                    }

                    export default Interest;