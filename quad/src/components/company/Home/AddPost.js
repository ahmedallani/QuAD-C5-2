import React, { Component } from "react";
import axios from "axios";
// import { Card, Button, CardTitle, CardImg, Label, Col } from "reactstrap";
// import { FormGroup, Input,Form } from "reactstrap";
import { Card, Button, CardTitle, Label, Input, Row, Col,FormGroup } from "reactstrap";
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
      <div className="container">
    <Row className="addPost">
        <Col sm="2">
          <Card className="CompanyCards" body>
            {/* <div className="feedCardS"> */}
              <CardTitle>Company name</CardTitle>
              <CardTitle>Job Title </CardTitle>
              <FormGroup>
              <Label for="exampleEmail">Email</Label>
                <Input type="email" onChange={(event) => this.getInputVal(event,'jobTitle')} id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <br />
              <br />
              <Button color="success" onClick={this.PostAnOfferJob}>
                Apply
              </Button>
              <Button color="danger" onClick={this.cancel}>
                Cancel
              </Button>
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

export default AddPost;