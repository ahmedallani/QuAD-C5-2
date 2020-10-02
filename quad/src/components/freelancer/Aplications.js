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
  ModalFooter,
} from "reactstrap";

export default class Aplications extends React.Component {
  state = {
    jobs : [],
    applications: [],
    visible: true,
    modalIsopen: false,
  };

  componentDidMount() {
    console.log('aplications')
    axios.get('http://127.0.0.1:3008/applications/' + this.props.freelancer)
      .then(res => {
        console.log(res.data)
        this.setState({ applications: res.data })
      })
      .catch(err => console.log(err))
      // we have the job offers ids, now we need the actual offers
      axios.get('http://127.0.0.1:3008/home')
        .then(res => {
            console.log('job offers ===>', res.data)
            
            
            this.setState({jobs : res.data})
        })
        .catch(err => console.log('client side catch error ===>' , err))
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

  render() {
    const applications = this.state.applications;
    const listAppli = applications.map((appli, i) => 
    <div>
      <Card className="post">
          <CardBody>
            <CardTitle> @company-Username</CardTitle>
            <CardSubtitle>Company Name</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
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
            Company post
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary">show original </Button>
            <Button onClick={this.closeModal.bind(this)} color="secondary">
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
    </div>
    )
    return (
      <div className="posts">
        <Card className="post">
          <CardBody>
            <CardTitle> @company-Username</CardTitle>
            <CardSubtitle>Company Name</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
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
            Company post
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary">show original </Button>
            <Button onClick={this.closeModal.bind(this)} color="secondary">
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>

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
