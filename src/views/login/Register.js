import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';
import loginImg from "./Login.svg";
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Image} from 'react-bootstrap';
import Fire from "./config/fire";
import "./register.css";
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      person:"",
      description:"",
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  render() {
    return (
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
           <div onChange={this.onChangeValue} className="container" >
              <input type="radio" value="Student" name="gender" /> Student &nbsp;
              <input type="radio" value="Expert" name="gender" /> Expert
            </div>
            <div className="textedit" id="ed">
              <textarea
                rows="5"
                cols="50"
                value={this.state.content}
                onChange={this.handleChange}
                required
              />
            </div>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             required
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             required
             />
           <br/>
           <Link to="/">
           <RaisedButton label="Register" primary={true} style={{marginTop: "15px",}} onClick={(event) => this.signup(event)}/>
           </Link>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
   onChangeValue(event) {
     this.setState({person:event.target.value});
    if (event.target.value=="Expert") {
      var el = document.getElementById("ed");
      el.style.display = "block";
    }else {
      var el = document.getElementById("ed");
      el.style.display = "none";
    }
  }
  signup(e){
      e.preventDefault();
      Fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{})
      .then((u)=>{
        Fire.database().ref("User/"+Fire.auth().currentUser.uid).set({
          FirstName:this.state.first_name,
          LastName:this.state.last_name,
          Email:this.state.email,
          Password:this.state.password,
          Role:this.state.person,
          Description:this.state.description,
        });
        alert("registered: "+u);})
        .catch((error) =>{
          alert(error);
        });
      }
}
const style = {
  margin: 15,
};
export default Register;
