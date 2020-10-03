import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import CompanyNavbar from "./CompanyNavbar";
import Home from './Home/Home.js'
import Profile from "./Profile";
// import Posts from "./Home/Posts/Posts";
// import Home from "./Home/Home"
export default class CompanySection extends Component {

    render() {
        return (
          <Router>
            <CompanyNavbar />
            <Route exact path="/" component={Home}/>
            <Route path="/Profile" component={Profile} />
            <Route path="/logout" component={Profile} />
          </Router>
        );
    }
}
