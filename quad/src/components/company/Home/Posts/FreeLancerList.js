import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";

class FreeLancerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FreeLancers: []
        };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:3008/application')
            .then(res => console.log('Freelancers who applied ====>',res.data))
            .catch(err => console.log("[client side err]", err));
    }

    render() {

         console.log("this")
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
                <tbody>
                   {this.state.FreeLancers.map((freelancer, key) => { 
                     console.log("this FreeLancerList",freelancer.FirstName);

               return   ( <tr key={key}>
                    <th scope="row">{freelancer.id}</th>
                    <td>{freelancer.FirstName}</td>
                    <td>{freelancer.LastName}</td>
                  </tr>)
                   })}
                </tbody>
            </Table>
        );
    }
}

export default FreeLancerList;
