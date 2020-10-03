import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardImg,
  Row,
  Col,
  CardBody,
  CardText,
  CardLink,
  CardSubtitle,
  Modal,
  ModalHeader,
  ModalBody,
  toggle,
  ModalFooter,
  Media,
  Input,
} from "reactstrap";
// import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./post.css";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JobOffersContainer: [],
      CompanyDataContainer: [],
      openModal: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:3008/jobs")
      .then((res) => this.setState({ JobOffersContainer: res.data }))
      .catch((err) => console.log("[client side err]", err));


    axios
      .get("http://127.0.0.1:3008/signup/company")
      .then((res) => this.setState({ CompanyDataContainer: res.data }))
      .catch((err) => console.log("[client side err]", err));

    // axios.get("http://127.0.0.1:3008/applications/" ).then((res) =>{
    //   console.log('hey ther',res.data)
    //   this.setState({})
    // });
  }

  openModalByClick() {
    //   axios.post('/freelancerApplied').then((res) =>{
    //     console.log(res);
    //   }).catch((err) =>{
    //     console.log(err);
    //   })

    this.setState({ openModal: true });
  }

  closeModalByClick() {
    this.setState({ openModal: false });



  }

  render(props) {
    console.log("this JobOffersContainer ===>", this.props.offers);
    console.log("this company ", this.props.company);
    const offers = this.props.offers;
    const post = offers.map((elm, key) => (
      <Row key={key} className="container">
        <Card className="feedCard" body>
          <div className="feedCardS">
            <Card>
              <CardBody>
                <CardTitle>{elm.Name} name</CardTitle>
                <CardSubtitle>{elm.JobTitle} titel</CardSubtitle>

              </CardBody>
              <CardBody>
                <CardText>{elm.Description}</CardText>
                <Button className="freelancerApplied" color="danger">
                  Delete post
                </Button>
                <Button
                  onClick={this.openModalByClick.bind(this)}
                  className="freelancerApplied"
                  color="info"
                >
                  Freelancer applied
                </Button>
              </CardBody>
            </Card>
          </div>
        </Card>

        <Modal isOpen={this.state.openModal === true}>
          <ModalHeader>Modal title</ModalHeader>

          <Card>
            <CardImg
              top
              width="100%"
              src="/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>

          <ModalFooter>
            <Button color="danger" onClick={this.closeModalByClick.bind(this)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Row>
    ));
  
    
  return<div>{ post }</div>;

  }
}

export default Post;

// onclick it will render view to the freeLancerList component

//   Delete() {
//     axios
//       .delete("http://127.0.0.1:3008/jobs/:id")
//       .then((res) => console.log("res ===>", res))
//       .catch((err) => console.log("[client side err]", err));
//   }
