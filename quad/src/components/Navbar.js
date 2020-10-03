// import react.
import React from "react";
// import browser router.

// eslint-disable-next-line
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import axios.
import axios from "axios";

// import bootstrap elements.
import { Form, FormGroup, Input, Button } from "reactstrap";

// create a new component for log in.
export class Navbar extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    email: "",
    password: "",
    checkProfileType: true,
    loginType: "Freelancer"
  };
  this.handlePfileType = this.handlePfileType.bind(this);
  }

//choice the type of profile type logging
handlePfileType(){
  if(this.state.checkProfileType){
  this.setState({checkProfileType: false, loginType: "Company"});
  }else{
    this.setState({checkProfileType: true, loginType: "Freelancer"});
  }
  console.log(this.state.checkProfileType)
}


  // watching the change inside value.
  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
    // console.log(e);
  };
  homeFreelancer = () => {
    this.props.homeFreelancer();
  }
  // submit button.
  handleSubmit = () => {
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    // condition for rendering the section
    if(this.state.checkProfileType){
    axios.post("http://127.0.0.1:3008/login", user)
      .then(response => this.props.homeFreelancer(response.data))
      .catch(err =>  console.log('[client side login error]',err) );
    } else {
    axios.post('http://127.0.0.1:3008/login/company', user)
    .then(response => this.props.homeFreelancer(response.data))
    .catch(err =>  console.log('[client side login error]',err) );
    }
  };



  render() {
    return (
      <Form>
        <div className="bar">
          <ul className="navbar">
            <FormGroup className="inputs">
              <li id="logo" className="btn">
                QuAD
              </li>
              <div className="loginBar">
              <li className="btn">
                  <Button
                    onClick={this.handlePfileType}
                    id="submitLog"
                  >
                    {this.state.loginType}
                  </Button>
                </li>
                <li className="btn">
                  <Input
                    className="input"
                    required
                    onChange={this.handleChange}
                    id="email"
                    type="email"
                    placeholder="Enter email"
                  />
                </li>
                <li className="btn">
                  <Input
                    className="input"
                    required
                    onChange={this.handleChange}
                    id="password"
                    type="password"
                    placeholder="Enter password"
                  />
                </li>
                <li className="btn">
                  <Button
                    onClick={this.handleSubmit}
                    id="submitLog"
                  >
                    Log in
                  </Button>
                </li>
              </div>
            </FormGroup>
          </ul>
        </div>
      </Form>
    );
  }
}