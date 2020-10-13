import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Modal from 'react-awesome-modal';
//import axios from 'axios';
import Login from './Login';
import loginImg from "./Login.svg";
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Image} from 'react-bootstrap';
import {Container} from 'reactstrap';
import Fire from "../config/fire";
import "./register.css";
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      visible:false,
      userType:"",
      first_name:'',
      email:'',
      password:'',
      description:"",
      level:"",
      page:"questionnaire",
      invalidEmail:"",
      invalidPassword:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  render() {
    return (
      <div style={{backgroundColor:"#f5f5f5"}}>
        <MuiThemeProvider>
          <div>
          <div style={{display:"flex"}}> <Link to="/"><ArrowBackIcon style={{marginTop:"35px", marginLeft:"10px"}}/></Link> <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/> {/*<h1 style={{ marginLeft:"40%"}}>Beginner</h1>*/}</div>
        <hr/>
        <div style={{textAlign:"center"}}><div ><h3>Register</h3></div></div>
           <div >``````````````````
            <img style={{width:"21em",margin:"10px"}} src={loginImg}/>
           </div>
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <div onChange={this.onChangeValue} className="container" >
              <input type="radio" value="Student" name="gender" /> Student &nbsp;
              <input type="radio" value="Expert" name="gender" /> Expert
            </div>
            <div className="textedit" id="ed">
              <p style={{fontSize:"12px", fontWeight:"bold"}}>Describe your level of expertise in python, example (I am a python lecturer at a university.)</p>

              <textarea
                rows="2"
                cols="40"
                value={this.state.content}
                onChange={this.handleChange}
              />
            </div>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
             <p style={{color: "#DA0230", fontSize:"12px"}}>{this.state.invalidEmail}</p>
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
             <p style={{color: "#DA0230", fontSize:"12px"}}>{this.state.invalidPassword}</p>
           <br/>
           <Link to="/">
           <RaisedButton label="Register" primary={true} style={{marginTop: "15px",}} onClick={(event) => this.signup(event)}/>
           </Link>
          </div>
          <Modal visible={this.state.visible}>
            <Container>
              <Link to={this.state.page}>
                 <RaisedButton label="Continue" primary={true} style={{marginTop: "15px",}} />
              </Link>
            </Container>
          </Modal>
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

  handleChange(event) {
    this.setState({description: event.target.value});
  }

  signup(e){
      e.preventDefault();
      if (this.state.person=="Student") {
        this.setState({
          invalidEmail:"",
          invalidPassword:""
        });
        Fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{})
        .then((u)=>{
          Fire.database().ref("User/"+Fire.auth().currentUser.uid).set({
            FirstName:this.state.first_name,
            Email:this.state.email,
            Password:this.state.password,
            userType: "Student",
            level:"Beginner"
          });
          this.setState({
            visible:true,
          });
          alert("registered: "+this.state.first_name + "as a student.");})
        .catch((error) =>{
          switch(error.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              this.setState({
                invalidEmail: error.message
              });
              break;
            case "auth/weak-password":
              this.setState({
                invalidPassword:error.message
              });
              break;
          }
        });
      } else {
        this.setState({
          invalidEmail:"",
          invalidPassword:""
        });
        Fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{})
        .then((u)=>{
          Fire.database().ref("User/"+Fire.auth().currentUser.uid).set({
            FirstName:this.state.first_name,
            Email:this.state.email,
            Password:this.state.password,
            Description:this.state.description,
            userType:"Expert"
          });
          this.setState({
            visible:true,
            page:"/",
          });
          alert("registered: "+this.state.first_name+ "as a python expert.");})
        .catch((error) =>{
          switch(error.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              this.setState({
                invalidEmail: error.message
              });
              break;
            case "auth/weak-password":
              this.setState({
                invalidPassword:error.message
              });
              break;
          }
        });
      }

  }
}
const style = {
  margin: 15,
};
export default Register;
