import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";



class Edit extends React.Component {
    constructor(props) {
        super(props);

    }

    handelEdit = () => {
        this.props.handelEdit()
    }

    render() {
        return (
          <Button id ="editProfile" color="success" onClick={this.handelEdit}>
            Edit profile
          </Button>
        );
    }

}


export default Edit;