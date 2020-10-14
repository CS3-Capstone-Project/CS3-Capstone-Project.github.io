import React, {Component} from "react";
import {Button,TextField} from '@material-ui/core';
import loginImg from "./Login.svg";
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Image} from 'react-bootstrap';
import Fire from "../../views/config/fire.js";

//Styles
import './style.css';

//reactstrap API
import {Col,Container,Row} from 'reactstrap';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:""
    };
  }

  render(){
    return (
      <Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
        <Container style={{paddingTop:"85px"}}>
          <div ><div ><h1 style={{textDecoration:"none",fontFamily:"Courier New"}}>{this.props.user}</h1></div></div>
          <div>{this.props.description}</div>
          <div><p style={{fontSize:"20px", fontWeight:"bold"}}>Python {this.props.userType}</p></div>
          <div><p style={{fontSize:"16px", fontWeight:"bold"}}>Level:  {this.props.userLevel}</p></div>
          <div><p style={{fontSize:"16px", fontWeight:"bold"}}>Email:  {this.props.userEmail}</p></div>
        </Container>
      </Container>
    );
  }
}
export default ProfilePage;
