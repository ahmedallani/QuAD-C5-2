// import react.
import React from "react";
import axios from 'axios';
// import browser router.
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import bootstrap elements.
// eslint-disable-next-line
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

export default class Aplications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      applications: [],
      visible: true,
      modalIsopen: false,
      deletePostId: 0,
    };
    this.cancelUserApplication = this.cancelUserApplication.bind(this);

  }

  componentDidMount() {
    console.log("applications");
    axios
      .get("http://127.0.0.1:3008/applications/" + this.props.freelancer)
      .then((res) => {
        console.log(res.data);
        this.setState({ applications: res.data });
      })
      .catch((err) => console.log(err));
    // we have the job offers ids, now we need the actual offers
    axios
      .get("http://127.0.0.1:3008/home")
      .then((res) => {
        console.log("job offers ===>", res.data);

        this.setState({ jobs: res.data });
      })
      .catch((err) => console.log("client side catch error ===>", err));
  }

  toggleModal() {
    this.setState({ visible: this.state.visible });
  }

  openModal() {
    this.setState({ modalIsopen: true });
  }

  closeModal() {
    this.setState({ modalIsopen: false });
  }

  cancelUserApplication(jobOfferId, userId) {
    const application = {
      jobOfferId: jobOfferId,
      userId: userId
    };
    axios
      .post("http://127.0.0.1:3008/Applications/deleteApp", application)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });


    console.log(jobOfferId, userId);
  }

  render() {

    const applications = [];
    for (let i = 0; i < this.state.applications.length; i++) {
      const appId = this.state.applications[i].jobOfferId;
      for (let j = 0; j < this.state.jobs.length; j++) {
        const job = this.state.jobs[j];
        if (job.ID === appId) {
          applications.push(job);
        }
      }
    }

    const listAppli = applications.map((job, i) => (
      <div>
        <Card className="post">
          <CardBody>
            <CardTitle> @company-Username</CardTitle>
            <CardSubtitle>Company Name : {job.companyId}</CardSubtitle>
            <CardText>Job Title : {job.jobTitle}</CardText>
          </CardBody>
          <CardImg
            width="100%"
            src="https://reactstrap.github.io/assets/318x180.svg"
            alt="company image"
          />
          <CardBody>
            <CardLink className="postButton" href="#">
              cancel
            </CardLink>
            <CardLink
              onClick={this.openModal.bind(this)}
              className="postButton"
              href="#"
            >
              View more
            </CardLink>
          </CardBody>
        </Card>
        {/* create modal to show more info */}
        <Modal isOpen={this.state.modalIsopen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>
            {job.jobTitle}
          </ModalHeader>
          <ModalBody>{job.Description}</ModalBody>
          <ModalFooter>
            <Button
              onClick={() =>
                this.cancelUserApplication(job.ID, this.props.freelancer)
              }
              color="danger"
            >
              Cancel Application
            </Button>
            <Button onClick={this.closeModal.bind(this)} color="secondary">
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    ));
    return (
      <div>{listAppli}</div>

      // <Form >
      //   <FormGroup >
      //     <ul>
      //       <li className="postInfo" id="companyName"> company Name </li>
      //       <li className="postInfo" id="date"> Date</li>
      //       <li className="postInfo" id="description"> Description</li>
      //       <li className="postInfo" id="img"> img</li>
      //     </ul>
      //     <Button className="postButton" id="viewMore" typpe="submit">
      //       View More
      //     </Button>
      //     <Button className="postButton" id="cancel" type="submit">
      //       Cancel
      //     </Button>
      //   </FormGroup>
      // </Form>
    );
  }
}
