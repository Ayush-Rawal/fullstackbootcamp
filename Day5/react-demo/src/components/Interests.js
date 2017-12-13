import React, { Component } from 'react';
import './App.css';

class Interest extends Component {
    render() {
            return ( < div className = "App" >
                    <h1 > Interests of { this.props.name }: </h1>  
                    <ul>{
                       this.props.interests.map(name => <li key="name">{name}</li>)} 
                       {/* key can also be index(more preferable)    */}
                        </ul>					
                        </div>);
                        }
                    }

                    export default Interest;