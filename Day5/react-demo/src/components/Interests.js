import React, { Component } from 'react';
import './App.css';

class Interest extends Component {

    constructor(props){
        super();
        this.state = {
            interests:["Sport","sport"],
            inpVal:""
        }
    }

    updateInpVal(change){
        console.log(change)
        this.setState({
            inpVal:change.target.value
        })
    }

    addInterest(){
        let ints = this.state.interests
        ints.push(this.state.inpVal)
        this.setState({
            interests:ints
        })
    }

    render() {
            return ( < div className = "App" >
            <div className ="row">
                <div className="col-lg-6">
                    <input type = "text" placeholder="Enter interest here" className="input-lg" value={this.state.inpVal} onChange={change => this.updateInpVal(change)} />
                </div>  
                <div className="col-lg-6">
                <button type="submit" className="btn btn-success btn-lg" onClick={this.addInterest.bind(this)} >Submit</button>
                </div>  
            </div>  
                    <h1 > Interests of { this.props.name }: </h1>
                    <ul className="list-group" >{
                       this.state.interests.map(name => <li key={name} className="list-group-item" >{name}</li>)} 
                       {/* key can also be index(more preferable) */}
                        </ul>					
                        </div>);
                        }
                    }

                    export default Interest;



                    //Possible only incase of STATELESS COMPONENETS:

                    
/* 
                    const Interest = ({sports}) => { //removes this. and props.
                        let listitems =sports.map...
                        return (
                            ...
                        )
                    }
                    export default Interest */