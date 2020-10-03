
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

} from "reactstrap";
// import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import './post.css'
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JobOffersContainer: []
      
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:3008/jobs")
      .then((res) => this.setState({ JobOffersContainer: res.data }))
      .catch((err) => console.log("[client side err]", err));

    
  }
  render(props) {
    
    console.log("this JobOffersContainer ===>", this.props.offers);
    console.log("this company ", this.props.company);
    const offers = this.props.offers;
    const post = offers.map((elm, key) => 
      
        <Row key={key} className="container">
            <Card className="feedCard" body>
              <div className="feedCardS">
                <Card>
                  <CardBody>
                    <CardTitle>{elm.Name}</CardTitle>
                    <CardText>{elm.JobTitle}</CardText>
                    <CardText>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </CardText>
                    <CardText>{elm.Description}.</CardText>
                  </CardBody>
                </Card>
              </div>
            </Card>
        </Row>
      
      )
      return ( 
      <div>{post}</div>
      )
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
