import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserNavBar  from '../freelancer/UserNavBar';
import Home from './HomePage/Home';
import FreelancerProfile from './Profile/FreelancerProfile'
import Aplications from './Aplications';


export default class FreelancerSection extends Component {

    

    // componentDidMount(props){
    //     console.log('FreelancerSection mounted')
    //   }
      
    //   shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Sould FreelancerSection update?')
    //     return true;
    //   }
      
      
      
    //   componentDidUpdate(previousProps, previousState) {
    //     console.log('FreelancerSection did update')
      
    //   }

    render(props) {
        // this.props.router.push('/Profile')


        return (
            <Router>
                <UserNavBar/>  
                <Route exact path="/" render={() => <Home user={this.props.freelancer} />}/>
                <Route path="/Profile" render={() => <FreelancerProfile freelancer={this.props.freelancer} />}/>
                <Route path="/Aplications" render={() => <Aplications freelancer={this.props.freelancer.id} />} />
                <Route path="/logout" component={Aplications} />

            </Router>
        );
    }
}


