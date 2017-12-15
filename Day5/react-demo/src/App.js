import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'
import Interests from './components/Interests'
//import 'bootstrap/dist/css/bootstrap.css'
import jquery from 'jquery' //you can replace jquery with $
import {BrowserRouter, Route,link, Link} from 'react-router-dom'

class App extends Component {

//     constructor() {
//         super();
//         this.state = {
//             name: "Ayush",
//             Image: "http://via.placeholder.com/400x200",
//             interests: ["Cricket", "Hockey", "Football", "Salsa"],
//             age:18
//         }

//     }

//     addInterest(){
//        let interest = this.state.interests;
//        interest.push("newsport")
//        this.setState({
//         interests:interest
//        })
//     }
// //Demonstrating API call

// getdata(ref){
//     let root = 'https://jsonplaceholder.typicode.com';
//     jquery.ajax({
//       url: root + '/posts',
//       method: 'GET'
//     }).then(function(data) {
//       ref.setState({
//           interests:data.map(post => post.title)
//       })
//         console.log(data);
//     });
// }

    render() {
//        this.getdata(this)
        return ( 
         <div className = "App">
        {/*} 
              <h1> Hello React! </h1>     
            <Profile name = { this.state.name } image = { this.state.Image } age = {this.state.age} addInterest={this.addInterest.bind(this)} >
            {/* <h1>Hello</h1>
            <h2>World</h2> 
              </Profile>
            <Interests interests = { this.state.interests } name = { this.state.name }/> */}
 
            My App
                <BrowserRouter>
                <div>
            <Link to="/profile" >Profile</Link>
            <Link to='/interest' >Interest</Link>
                <Route path="/interest" component={Interests}/>
                <Route path="/profile" component={Profile}/>
                </div>
                </BrowserRouter>
            
 
 
            </div>

        );
    }
}

export default App;
//It should return interests with for loops