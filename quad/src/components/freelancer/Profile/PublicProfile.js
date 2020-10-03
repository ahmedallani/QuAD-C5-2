import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import { Col } from "react-bootstrap";
import axios from "axios";

class PublicProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personalProfile: "" };
  }

  render() {
    console.log(this.props.freelance);
    return (
      <div>
        <Card className="userProfile">
          <Col xs={6} md={4}>
            <Image
              className="comapny-avatar"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_174e4544934%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_174e4544934%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.875%22%20y%3D%2295.2828125%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              roundedCircle
            />
          </Col>
          <CardBody>
            <Card className="userInfoCard">
              <CardText id="UserFName">First name</CardText>
              <CardText id="UserLName">Last Name</CardText>
              <CardText id="UserAge">Age</CardText>
              <CardText id="UserEmail">Email</CardText>
              <CardText id="UserPhone">Phone</CardText>
              <CardText id="UserDescription">Description</CardText>
              <CardText id="UserSkills">Skills</CardText>
            </Card>
            <Label id="msgProfile"> you can edit your account information by clicking here. </Label>
          </CardBody>
        </Card>

        {/* <img src={this.props.freelance.avatar}  width="50" height="100"></img>
       <h1>First Name: {this.props.freelance.FirstName}</h1>
       <h1>Last Name: {this.props.freelance.LastName}</h1>
       <h1>Age: {this.props.freelance.Age}</h1>
       <h1>Email: {this.props.freelance.Email}</h1>
       <h1>Phone: {this.props.freelance.PhoneNumber}</h1>
       <h1>Description: {this.props.freelance.Description}</h1>
       <h1>Skills: {this.props.freelance.Skills}</h1> */}
      </div>
    );
  }
}

export default PublicProfile;
