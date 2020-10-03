import React from "react";
import CompanySign from "./CompanySign.js";
import { Button, Label } from "reactstrap";
import FreelancerSign from "./FreelancerSign.js";
//  Form, FormGroup, Label, Input,
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signupType: 2 };
    this.handelCompanySign = this.handelCompanySign.bind(this);
    this.handelFreelancerSign = this.handelFreelancerSign.bind(this);
  }

  handelCompanySign() {
    this.setState({ signupType: 1 });
  }
  handelFreelancerSign() {
    this.setState({ signupType: 2 });
  }

  render() {
    let compo;
    if (this.state.signupType === 2) {
      compo = <FreelancerSign />;
    }
    if (this.state.signupType === 1) {
      compo = <CompanySign />;
    }
    return (
      <div>
      <div id ="welcomeText">Welcome to the sQuAD ! <br/><br/> 
      Our objectiv is to connect the dots between developpers and companies striving for awesome people like YOU !<br/>
      What are you waiting for? <br/>
      Create you account right now and let the world see your amazing skills.
      </div>
      <div className="signup">
        <Label id="logotext"> It's time to join the sQuAD! <br/> Click on the button that describes your status and let the Journey begin </Label>
        <br />
        <Button
          outline
          color="primary"
          className="buttonChange"
          onClick={this.handelFreelancerSign}
        >
          Freelancer
        </Button>
        <Button
          outline
          color="primary"
          className="buttonChange"
          onClick={this.handelCompanySign}
        >
          Company
        </Button>
        {compo}
      </div>
      </div>
    );
  }
}

export default Signup;
