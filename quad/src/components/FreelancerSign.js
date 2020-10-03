import React from "react";
import axios from "axios";
import { Form, Input, Button, FormGroup } from "reactstrap";
// FormGroup, Label,
class FreelancerSign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "freelancer",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      Cpassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.getSign = this.getSign.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log("=====>",event.target.value)
  }

  getSign() {
    let body = {
      Status: this.state.status,
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Email: this.state.email,
      Password: this.state.password,
    };
    if (this.state.password !== this.state.Cpassword) {
      alert("check your password again !");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      alert("wrong email !");
    } else {
      axios
        .post("http://127.0.0.1:3008/signup", body)
        .then((response) => console.log("[client side SignUp]", response.data))
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <br />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <br />
          <Input
            type="password"
            name="Cpassword"
            placeholder="Confirm password"
            onChange={this.handleChange}
          />
          <br />
          {
          // _*_ if you use type submit it will show information 
          // _*_ about the user in the url
        }
          <Button color="primary"  onClick={this.getSign}>
            Submit
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default FreelancerSign;
