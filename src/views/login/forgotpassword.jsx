import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton,AppBar,TextField} from 'material-ui';
import loginImg from "./Login.svg";
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Image} from 'react-bootstrap';
import Fire from "./config/fire";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:""
    };
  }
  render(){
    return (
      <div style={{backgroundColor:"#f5f5f5"}}>
        <MuiThemeProvider>
         <div>
           <div style={{display:"flex"}}> <Link to="/">
            <ArrowBackIcon style={{marginTop:"35px", marginLeft:"10px"}}/></Link>
            <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/>
          </div>
          <div style={{textAlign:"center"}}><div ><h3>Forgot Password</h3></div></div>
          <TextField
            hintText="Enter your email"
            floatingLabelText="Email"
            onChange = {(event,newValue) => this.setState({email:newValue})}
<<<<<<< HEAD
            required = "true"
            />
          <br/>
          <Link to="/">
           <RaisedButton label="Reset password" primary={true} style={{marginTop: "15px",}} onClick={event =>this.reset(event)}/>
=======
            />
          <br/>
          <Link to="/">
           <RaisedButton label="send" primary={true} style={{marginTop: "15px",}} onClick={event =>this.reset(event)}/>
>>>>>>> landing
          </Link>
         </div>
        </MuiThemeProvider>
      </div>
    );
  }
  reset(e){
    e.preventDefault();
<<<<<<< HEAD
    if (this.state.email != "") {
      Fire.auth().sendPasswordResetEmail(this.state.email).then(function(){
        alert("Check your emails:");
      }).catch((error)=>{
        alert(error)
      });
    }else {
      alert("email not sent");
    }

=======
    Fire.auth().sendPasswordResetEmail(this.state.email).then(function(){
      alert("Check your emails");
    }).catch((error)=>{
      alert(error)
    });
>>>>>>> landing
  }
}
export default ForgotPassword;
