import React, { useEffect} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton,AppBar,TextField} from 'material-ui';
import loginImg from "./Login.svg";
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Image} from 'react-bootstrap';
import Fire from "../config/fire";
import Questionnaire from "../questionnaire/questionnaire";
import Modal from 'react-awesome-modal';
import Header from "../../components/header/Header.js";

//import axios from 'axios';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state={
      //user:{},
      email:"",
      visible:false,
      loggedin:false,
      emailAddress:'',
      password:'',
      invalidEmail:"",
      invalidPassword:"",
      name:"No_Name"
    }
    this.login=this.login.bind(this);
    this.reset=this.reset.bind(this);
  }
  render() {
      return (
        <div style={{backgroundColor:"#f5f5f5"}}>
          <Header/>
          <MuiThemeProvider>
            <div>
          <div style={{textAlign:"center"}}><div ><h3>Login</h3></div></div>
               <div >
                <img style={{width:"21em",margin:"10px"}} src={loginImg}/>
               </div>
               <TextField
                 hintText="Enter your Email"
                 floatingLabelText="Email"
                 onChange = {(event,newValue) => this.setState({emailAddress:newValue})}
                 required = "true"
                 />
                 <p style={{color: "#DA0230", fontSize:"12px"}}>{this.state.invalidEmail}</p>
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   color="primary"
                   onChange = {(event,newValue) => this.setState({password:newValue})}
                   required = "true"
                   />
                   <p style={{color: "#DA0230", fontSize:"12px"}}>{this.state.invalidPassword}</p>
                 <br/>
                  <RaisedButton label="Login" primary={true} style={{marginTop: "15px",}} 
                      onClick={(event) =>{
                      this.login();
                      }}
                  />
             </div>
                <a href="#" onClick={(event) =>{this.setState({visible:true});}}> forgot password</a>
                <Modal visible={this.state.visible} width="400" height="200" effect= "fadeInUp" onClickAway={() => this.setState({visible:false})}>
                  <div style={{backgroundColor:"#f5f5f5"}}>
                    <MuiThemeProvider>
                     <div>
                        <div style={{textAlign:"center"}}><div ><h3>Reset Password</h3></div></div>
                        <p>A link to reset your password will be sent to your email address.</p>
                        <TextField
                          hintText="Enter your email"
                          floatingLabelText="Email"
                          onChange = {(event,newValue) => this.setState({email:newValue})}
                        />
                        <br/>
                        <RaisedButton label="send" primary={true} style={{marginTop: "15px",}} onClick={event =>this.reset(event)}/>
                     </div>
                    </MuiThemeProvider>
                  </div>  
                </Modal>
           </MuiThemeProvider>
        </div>
      );
    }
    login(){
      this.setState({
        invalidPassword:"",
        invalidEmail:""
      });
      Fire.auth().signInWithEmailAndPassword(this.state.emailAddress,this.state.password).then((u)=>{
        }).catch((error) =>{
        switch(error.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            this.setState({
              invalidEmail: error.message
            });
            break;
          case "auth/wrong-password":
            this.setState({
              invalidPassword:error.message
            });
            break;
        }
      });
    }
    reset(e){
      e.preventDefault();
      Fire.auth().sendPasswordResetEmail(this.state.email).then(function(){
        alert("Check your emails");
      }).catch((error)=>{
        alert(error)
      });
    }
    
}
export default Login;