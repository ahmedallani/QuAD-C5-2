import React, { Component } from "react";
import axios from "axios";
// import { Card, Button, CardTitle, CardImg, Label, Col } from "reactstrap";
// import { FormGroup, Input,Form } from "reactstrap";
import {
  Card,
  Button,
  CardTitle,
  Label,
  Input,
  Row,
  Col,
  FormGroup,
} from "reactstrap";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import './post.css';
class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: "",
      Description: "",
      Companyname: [],
    };
    // this.cancel = this.cancel.bind(this);
    this.getInputVal = this.getInputVal.bind(this);
    this.PostAnOfferJob = this.PostAnOfferJob.bind(this);
  }

  PostAnOfferJob() {
    console.log("yhis");
    axios
      .post("http://127.0.0.1:3008/jobs", this.state)
      .then((res) => console.log(res, "RES"))
      .catch((err) => console.error("[client side error]", err));
  }

  getInputVal(event, text) {
    this.setState({ [text]: event.target.value });
    console.log("input ===>", text, event.target.value);
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:3008/signup/company")
      .then((res) => this.setState({ Companyname: res.data }))
      .catch((err) => console.error("[client side error]", err));
  }

  render() {
    return (
      <div className="container">
        <Row className="addPost">
          <Col sm="2">
            <Card className="CompanyCards" body>
              {/* <div className="feedCardS"> */}
              <CardTitle>Company name : </CardTitle>
              <CardTitle>Job Title </CardTitle>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="jobTitle"
                  onChange={(event) => this.getInputVal(event, "jobTitle")}
                  id="jobTitle"
                  placeholder="jobTitle..."
                />
                <Input
                  type="Description"
                  onChange={(event) => this.getInputVal(event, "Description")}
                  id="Description"
                  placeholder="Description..."
                />
              </FormGroup>
              <br />
              <br />
              <Button color="success" onClick={this.PostAnOfferJob}>
                Apply
              </Button>
              <Button color="danger">Cancel</Button>
              {/* </div> */}
            </Card>
            <br />
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}
// onClick={this.cancel}
export default AddPost;
