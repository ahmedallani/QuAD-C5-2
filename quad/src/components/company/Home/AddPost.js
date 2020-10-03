import React, { Component } from "react";
import axios from "axios";
// import { Card, Button, CardTitle, CardImg, Label, Col } from "reactstrap";
// import { FormGroup, Input,Form } from "reactstrap";
import {
  CardBody,
  Form,
  Card,
  Button,
  CardTitle,
  Input,
  Row,
  Col,
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
      freelancerApp:[]
    };
    // this.cancel = this.cancel.bind(this);
    this.getInputVal = this.getInputVal.bind(this);
    this.PostAnOfferJob = this.PostAnOfferJob.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:3008/application")
      .then((res) => this.setState({ freelancerApp: res.data }))
      .catch((err) => console.log("[client side err]", err));
  }


  PostAnOfferJob() {
    console.log("post job offer");
    axios
      .post("http://127.0.0.1:3008/jobs", this.state)
      .then((res) => console.log(res, "RES"))
      .catch((err) => console.error("[cpost jobs erroe]", err));
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
    console.log("hey",this.state.freelancerApp);
    return (
      <Form>
        <Row className="addPost">
          <Col sm="6">
            <Card className="addpostCard" body>
              <CardBody>
                <CardTitle>Company name</CardTitle>
                <CardTitle>Job title</CardTitle>
                <Input
                  type="text"
                  name="jobTitel"
                  id="add job titel"
                  placeholder="Job titel"
                />
                <CardTitle>Job description</CardTitle>
                <Col sm={10}>
                  <Input
                    onChange={(event) => this.getInputVal(event, "jobTitle")}
                    type="textarea"
                    name="text"
                    id="exampleText"
                    placeholder="add description to your post"
                  />
                </Col>
                <br />
                <Button color="primary" onClick={this.PostAnOfferJob}>
                  Add post
                </Button>
                {/* <Button color="danger" onClick={this.PostAnOfferJob}>
                    cancel
                  </Button> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Form>
      //       <div className="container">
      //         <Row className="addPost">
      //           <Col sm="2">
      //             <Card className="CompanyCards" body>
      //               {/* <div className="feedCardS"> */}
      //               <CardTitle>Company name : </CardTitle>
      //               <CardTitle>Job Title </CardTitle>
      //               <FormGroup>
      //                 <Label for="exampleEmail">Email</Label>
      //                 <Input
      //                   type="jobTitle"
      //                   onChange={(event) => this.getInputVal(event, "jobTitle")}
      //                   id="jobTitle"
      //                   placeholder="jobTitle..."
      //                 />
      //                 <Input
      //                   type="Description"
      //                   onChange={(event) => this.getInputVal(event, "Description")}
      //                   id="Description"
      //                   placeholder="Description..."
      //                 />
      //               </FormGroup>
      //               <br />
      //               <br />
      //               <Button color="success" onClick={this.PostAnOfferJob}>
      //                 Apply
      //               </Button>
      //               <Button color="danger">Cancel</Button>
      //               {/* </div> */}
      //             </Card>
      //             <br />
      //             <br />
      //           </Col>
      //         </Row>
      //       </div>
    );
  }
}
// onClick={this.cancel}
export default AddPost;
