import React, { Component } from "react";
import { Card, Button, CardTitle, CardImg, Row, Col } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  apply = () => {
    // this.props.user
    // this.props.feed.Id
    // post application
    let Ids = {
      userId : this.props.user.id,
      jobOfferId : this.props.feed.ID
    }
    console.log(Ids)
    axios.post('http://127.0.0.1:3008/apply', Ids)
    .then(response => console.log('[Application saved]',response.data))
    .catch(error  => console.log(error));

      this.toggle();
  }

  toggle = () => this.setState({ modal: !this.state.modal });

  render(props) {
    return (
      <Row className="feed">
        <Col sm="6">
          <Card className="feedCard" body>
            <div className="feedCardS">
              <CardTitle>Company name : {this.props.feed.companyId}</CardTitle>
              <CardTitle>Job Title : {this.props.feed.jobTitle} </CardTitle>
              <CardImg
                width="100%"
                src="https://reactstrap.github.io/assets/318x180.svg"
                alt="company image"
              />
              <br />
              <br />
              <Button color="primary" id="detailsBtn" onClick={this.toggle}>
                More details
              </Button>
            </div>
          </Card>
          <br />
          <br />
          <Modal isOpen={this.state.modal}>
            <ModalHeader>Job description</ModalHeader>
            <ModalBody>
              {this.props.feed.Description}
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.apply}>
                Apply
              </Button>{" "}
              <Button color="danger" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    );
  }
}
