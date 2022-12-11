import React, { Component } from "react";
import Personalinfo from "./personalinfo";
import Email from "./email";
import Name from "./name";
import Address from "./address";
class Profile extends Component {
    render() {
      return (
        <div className="block">
          <Personalinfo />
          <Email />
          <Name />
          <Address />
        </div>
      );
    }
  }
  export default Profile;
