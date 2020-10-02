import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";

class FreeLancerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FreeLancers: [],
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:3008/application")
      .then((res) => this.setState({FreeLancers: res.data}))
      .catch((err) => console.log("[client side err]", err));
  }

  render() {
    console.log("this");
    console.log("this FreeLancerList", this.state.FreeLancers);
    const FreelancerApplied = this.state.FreeLancers.map((freelancer, key) => {
     
      return (
        <tr key={key}>
          <th scope="row">{freelancer.id}</th>
          <td>{freelancer.FirstName}</td>
          <td>{freelancer.LastName}</td>
        </tr>
      );
    });
    return (
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>{FreelancerApplied}</tbody>
      </Table>
    );
  }
}

export default FreeLancerList;
