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

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:""
    };
  }

  //Update state when email address is entered 
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  //
  handleSubmit(e){
      e.preventDefault();
      alert(this.state.email);
      this.reset(this.state.email);
        
   }
  render(){
    return (
      <Container>
        <div style={{textAlign:"center"}}>
          <img style={{width:"350px",margin:"10px"}} src={loginImg}/>
        </div>

        <div style={{textAlign:"center"}}><div ><h1 style={{textDecoration:"none",fontFamily:"Courier New"}}>Sign In</h1></div></div>

        <form>
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
            size = "medium" 
            className="buttons" 
            type="submit"
            value="Submit"
            style={{backgroundColor:"#5bc0de"}}
          > 
            Submit
          </Button>

        </form>
      </Container>
    );
  }
}
export default ProfilePage;
