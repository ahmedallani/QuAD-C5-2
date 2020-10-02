import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      FirstName: this.props.freelance.FirstName || '',
      LastName : this.props.freelance.LastName || '',
      Email : this.props.freelance.Email || '', 
      Age : this.props.freelance.Age || '', 
      PhoneNumber : this.props.freelance.PhoneNumber || '',
      Descreption : this.props.freelance.Descreption || '',
      Skills : this.props.freelance.Skills || '',
    };
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAvatar = this.handleChangeAvatar.bind(this)
    this.handleChangeAge = this.handleChangeAge.bind(this);
  }
 
  handleChange(event) {
    if(event.target.value){
    this.setState({ [event.target.name]: event.target.value });
    console.log("=====>" ,event.target.value, this.props.freelance, this.state)
  }
    }  
  handleChangeAge(event){
    let d = new Date();
    let n = d.getFullYear()
    let ag = n - parseInt(event.target.value.substring(0,4))
    this.setState({ [event.target.name]: ag})
  }
  handleChangeAvatar(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    console.log("=====>",event.target.files[0])
  }
  componentDidMount(){
   
    this.setState(state => {
      state = this.props.freelance

    })
    console.log("=====>",this.state)
  }
  save() {
    let body = {
      Avatar: this.state.file,
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Age : this.state.Age, 
      PhoneNumber : this.state.PhoneNumber,
      Descreption : this.state.Descreption,
      Skills : this.state.Skills
    };
    axios
    .post('http://127.0.0.1:3008/edit',body)
    .then(res => {
      this.setState(res.data)
    } )
    .catch(err => console.log(err))

    // this.setState({this.props.})
  }

  render() {
    
    return (
        <Form>
        <div>
        <Label for="avatar">Avatar</Label>
        {/* <Input type="file" name="avatar" accept="imAge/*" onChange={this.handleChangeAvatar}/> */}
        <Input type="file" onChange={this.handleChangeAvatar}/>
        <img src={this.state.file}/>
        <Label for="FirstName">First Name:</Label>
        <Input type="text" name="FirstName" onChange={this.handleChange} /><br/>
        <Label for="LastName">Last Name:</Label>
        <Input type="text" name="LastName" onChange={this.handleChange}/><br/>
        <Label for="Email">Email:</Label><br/>
        <Input type="Email" name="Email" onChange={this.handleChange}/><br/>
        <Label for="password">Password:</Label><br/>
        <Input type="password" name="password" onChange={this.handleChange}/><br/>
        <Label for="Birthday">Birthday:</Label><br/>
        <Input type="date" name="Age" onChange={this.handleChangeAge}/><br/>
        <Label for="PhoneNumber">Phone Number:</Label><br/>
        <Input type="tel" name="PhoneNumber" onChange={this.handleChange}/><br/>
        <Label for="Descreption">Profile:</Label><br/>
        <Input type="text" name="Descreption" placeholder="Describe yourself.." onChange={this.handleChange}/><br/>
        <Label for="Skills">Skills:</Label><br/>
        <Input type="text" name="Skills" placeholder="Describe your skills.." onChange={this.handleChange}/><br/>
        <Button >Cancel</Button>
        <Button onClick={this.save} >Save</Button>
    </div>
    </Form>
    );
  }
}

export default EditProfile;
