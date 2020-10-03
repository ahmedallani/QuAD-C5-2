import React from "react";
import PublicProfile from "./PublicProfile.js";
import EditProfile from "./EditProfile.js";
import Edit from "./Edit.js";

class FreelancerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      budy: null,
      profileType: 1 };
    this.handelEditProfil = this.handelEditProfil.bind(this);
    this.handelPublicProfile = this.handelPublicProfile.bind(this);
    // // this.callbackFunction = this.callbackFunction.bind(this)
  }

// componentDidMount(){
//   console.log ('okok',this.state.budy);
// }

//   callbackFunction = (childData) => {
   
//     this.setState({budy: childData})
    
// }
   
  handelEditProfil() {
    if (this.state.profileType === 1) {
    
      this.setState({ profileType: 2 });

    }
  }
  handelPublicProfile(){
    if (this.state.profileType === 2) {
      this.setState({ profileType: 1 })
    }
  }

  render() {
    let compo;
    let edit;
    if (this.state.profileType === 1) {
      compo = <PublicProfile freelance={this.props.freelancer} />;
    }
    if (this.state.profileType === 2){
      compo = <EditProfile freelance={this.props.freelancer} handelPublic={this.handelPublicProfile} profileCallback = {this.callbackFunction} />;
    }
    if (this.state.profileType === 1) {
      edit = <Edit handelEdit={this.handelEditProfil} />;
    }
    return (
      <>
      {compo}
      {edit}
      </>
      ) 
  }
}

export default FreelancerProfile;
