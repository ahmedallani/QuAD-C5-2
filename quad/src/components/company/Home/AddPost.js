import React, { Component } from "react";
import axios from "axios";
// import { Card, Button, CardTitle, CardImg, Label, Col } from "reactstrap";
// import { FormGroup, Input,Form } from "reactstrap";
import {
  CardText,
  CardLink,
  CardBody,
  Form,
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
        jobTitle : ''
    }
    this.cancel = this.cancel.bind(this);
    this.getInputVal = this.getInputVal.bind(this);
    this.PostAnOfferJob = this.PostAnOfferJob.bind(this);
  }

  PostAnOfferJob() {
      console.log('PostAnOfferJob');
      axios.post('http://127.0.0.1:3008/jobs', this.state.jobTitle)
      .then(res => console.log(res,'RES'))
      .catch(err => console.error("[client  side error]", err));
  }

  getInputVal(event, text) {
      this.setState({[text]: event.target.value})
      console.log('input ===>', event.target.value)
  }

  cancel() {
       console.log('canceled')
      this.setState({jobTitle: ''})
  }

  render() {
    return (
      <Form>
          <Row className="addPost">
            <Col sm="6">
              <Card className="addpostCard"body>
                <CardBody>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <Col sm={10}>
                    <Input
                      onChange={(event) => this.getInputVal(event, "jobTitle")}
                      type="textarea"
                      name="text"
                      id="exampleText"
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
    );
  }
}

export default AddPost;