import React from "react";
import "./App.css";
import FreelancerSection from './components/freelancer/FreelancerSection'

import { Navbar } from "./components/Navbar.js";
import Signup from "./components/Signup.js";

// import { UserNavBar } from "./UserNavBar.js";
// import { }
// import bootstrap.
import "bootstrap/dist/css/bootstrap.css";
import FreelancerProfile from "./components/freelancer/Profile/FreelancerProfile";
// import FreelancerProfile from "./components/freelancer/Profile/FreelancerProfile.js"

// const App = () => {
  
export class App extends React.Component {
constructor (props){

  super(props);
  this.state = { 
    user : null,
    handelcomponents: 1,

   };
  this.homeFreelancer = this.homeFreelancer.bind(this);
  this.lougoutFunc = this.lougoutFunc.bind(this);
}
// componentDidMount(props){
//   console.log('App mounted')
// }

// shouldComponentUpdate(nextProps, nextState) {
//   console.log('Sould App update?')
//   return true;
// }



// componentDidUpdate(previousProps, previousState) {
//   console.log('App did update')

// }

  homeFreelancer(user){
    this.setState({
      user : user,
      handelcomponents: 2});
  }
  lougoutFunc (){
    this.setState({handelcomponents: 1 });
  }

  render() {
    let compo;
    if (this.state.handelcomponents === 1){
      compo = <div>
              <Navbar homeFreelancer = {this.homeFreelancer}/>
              <Signup />
              </div>
    }
   if (this.state.handelcomponents === 2){
     compo = <FreelancerSection freelancer={this.state.user}  />
   }


  return <div>{compo}</div>;


};}

export default App;