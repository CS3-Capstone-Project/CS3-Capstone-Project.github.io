import React, {Component} from "react";
import {Button,TextField} from '@material-ui/core';
import loginImg from "./Login.svg";
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Image} from 'react-bootstrap';
import Fire from "./config/fire";

//Styles
import './style.css';

//reactstrap API
import {Col,Container,Row} from 'reactstrap';

//Components
import Header from "../../components/header/Header.js";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  //Update state when email address is entered 
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  //
  handleSubmit(event){
      event.preventDefault();
      this.reset(this.state.email);    
  }

  //Send password reset email
  reset(e){
    e.preventDefault();
    Fire.auth().sendPasswordResetEmail(this.state.email).then(function(){
      alert("Check your emails");
    }).catch((error)=>{
      let errorCode = error.code;
        let errorMessage = error.message;

        if(errorCode === 'auth/email-already-in-use'){
          alert("This email has an account, Sign in.");
        }
        else if(errorCode === 'auth/invalid-email'){
          alert("Oops, looks like this email is invalid.");
        }
        else if(errorCode === 'auth/weak-password'){
          alert("Password not strong enough.");
        }
        else{
          alert(errorMessage);
        }
    });
    window.location.replace('/');
  }

  render(){
    return (
      <Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>

        <Container style={{paddingTop:"78px"}}>
        <div style={{textAlign:"center"}}>
          <img style={{width:"350px",margin:"10px"}} src={loginImg}/>
        </div>
        <br/>
        <div style={{textAlign:"center"}}><div ><h1 style={{textDecoration:"none",fontFamily:"Courier New"}}>Reset Password</h1></div></div>

        <form onSubmit={this.reset}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth="true"
            required="true"
            size="medium"
            name="email"
            onChange={this.handleChange}
          />
          <br/><br/>
          <Button 
            fullWidth="true"
            size = "small" 
            className="buttons" 
            type="submit"
            value="Submit"
            variant="contained"
            style={{backgroundColor:"#5bc0de", textTransform:"none",fontSize:"medium"}}
          > 
            Send me a reset link
          </Button>
          <div style={{textAlign:"center", cursor:"default", marginTop:"5px"}}>
              <p>Back to <Link className="loginLinks" to="/signin"> Sign in </Link> page</p>
          </div>
        </form>
        </Container>
      </Container>
    );
  }
}
export default ForgotPassword;