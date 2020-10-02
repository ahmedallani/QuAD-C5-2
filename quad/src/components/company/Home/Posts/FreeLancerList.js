import React, { Component } from 'react';

class FreeLancerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            freeLancerName: '',
            freeLancerLastName: '',
            freeLancerEmail: ''
        }
        
        this.getFreeLancersTable = this.getFreeLancersTable.bind(this);
    }
    getFreeLancersTable() {
        axios.get('http://127.0.0.1:3008/signup')
        .then((res) =>
          this.setState({
            freeLancerName: res.FirstName,
            freeLancerLastName: res.LastName,
            freeLancerEmail: res.Email
          }))
          .catch((err) => console.log("[client side err]", err));
      }
    render() {
        this.state.map()
        return (
            
        );
    }
}

export default FreeLancerList;