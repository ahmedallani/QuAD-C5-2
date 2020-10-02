
import React, { Component } from "react";
import { Card, Button, CardTitle, CardImg, Row, Col } from "reactstrap";
// import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import './post.css'
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JobOffersContainer: [],
      CompanyDataContainer: [],
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:3008/jobs")
      .then((res) => this.setState({ JobOffersContainer: res.data }))
      .catch((err) => console.log("[client side err]", err));

    axios.get("http://127.0.0.1:3008/signup/company")
      .then((res) => this.setState({ CompanyDataContainer: res.data }))
      .catch((err) => console.log("[client side err]", err));
  }
  render() {
    
    console.log("this JobOffersContainer ===>", this.state.JobOffersContainer);
    console.log("this company ", this.state.CompanyDataContainer);

    const post = this.state.JobOffersContainer.map((elm, key) =>
    this.state.CompanyDataContainer.map((coelm, key) => {
      return (
        <Row key={key} className="container">
            <Col sm="6">
              <Card className="feedCard" body>
                <div className="feedCardS">
                  <CardTitle>Company name : {coelm.Name}</CardTitle>
                  <CardTitle>Company job title : {elm.JobTitle}</CardTitle>
                  <CardTitle>Job Title : {elm.Description} </CardTitle>
                  <CardImg
                    width="100%"
                    src="https://reactstrap.github.io/assets/318x180.svg"
                    alt="company image"
                  />
                  <br />
                  <br />
                  <Button color="primary" id="detailsBtn">
                    See-Freelancers-Applies
                  </Button>
                </div>
              </Card>
              <br />
              <br />
            </Col>
          </Row>
        );
      })
      );
      return <div>{post}</div>;
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
