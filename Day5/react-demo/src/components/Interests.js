import React, { Component } from 'react';
import './App.css';

class Interest extends Component {

    constructor(props){
        this.state = {
            interests:props.interests
            
        }
    }

    render() {
            return ( < div className = "App" >
<<<<<<< HEAD
            <div className ="row">
                <div className="col-md-6">
                    <input type = "text" placeholder="Enter interest here" className="input-lg" />
                </div>  
                <div className="col-md-3">
                <button type="submit" className="btn btn-success" >Submit</button>
                </div>  
            </div>  
                    <h1 > Interests of { this.props.name }: </h1>
                    <ul className="list-group" >{
                       this.props.interests.map(name => <li key="name" className="list-group-item" >{name}</li>)} 
                       {/* key can also be index(more preferable) */}
=======
                    <h1 > Interests of { this.props.name }: </h1>  
                    <ul>{
                       this.props.interests.map(name => <li key="name">{name}</li>)} 
                       {/* key can also be index(more preferable)    */}
>>>>>>> 24aa36a43a08e31a196647f627fcf397ecdd33cb
                        </ul>					
                        </div>);
                        }
                    }

                    export default Interest;