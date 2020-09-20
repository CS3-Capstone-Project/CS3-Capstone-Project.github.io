import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';
import loginImg from "./Login.svg"
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Image} from 'react-bootstrap';

=======
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
  render() {
    return (
<<<<<<< HEAD
      <div style={{backgroundColor:"#f5f5f5"}}>
        <MuiThemeProvider>
          <div>
          {/*<AppBar
             title="Register"
             style={{ background: 'linear-gradient(to right,#2E3B55,#ffe873,#ffd43b,#646464)' }}
           />*/}
<div style={{display:"flex"}}> <Link to="/"><ArrowBackIcon style={{marginTop:"35px", marginLeft:"10px"}}/></Link> <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/> {/*<h1 style={{ marginLeft:"40%"}}>Beginner</h1>*/}</div>
        <hr/>
        <div style={{textAlign:"center"}}><div ><h3>Register</h3></div></div>
=======
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
             style={{ background: 'linear-gradient(to right,#2E3B55,#ffe873,#ffd43b,#646464)' }}
           />
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
           <div >
   					<img style={{width:"21em",margin:"10px"}} src={loginImg}/>
   				 </div>
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
<<<<<<< HEAD
           <Link to="/">
           <RaisedButton label="Register" primary={true} style={{marginTop: "15px",}} />
           </Link>
=======
           <RaisedButton label="Register" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
<<<<<<< HEAD
}
=======

handleClick(event){
    var apiBaseUrl = "http://localhost:4000/api/";
    console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "first_name": this.state.first_name,
    "last_name":this.state.last_name,
    "email":this.state.email,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
      //  console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
}
const style = {
  margin: 15,
};
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
export default Register;
