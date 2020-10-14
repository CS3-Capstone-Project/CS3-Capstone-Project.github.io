import React, { Component } from 'react';
//Views
//import Landing from "./landing/Landing.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from 'react-awesome-modal';
//Styles
import "./App.scss";

//Bootstrap React API
import {Container} from 'reactstrap';

//Material UI API
import Button from '@material-ui/core/Button';
//Components
import Questionnaire from "./questionnaire/questionnaire.js";
import SignIn from "./login/signin.js";
import SignUp from "./login/signup.js";
import ForgotPassword from "./login/forgotpassword.js";
import Landing from "./landing/Landing.js";
import Beginner from "./levels/Beginner.js";
import Intermediate from "./levels/Intermediate.js";
import Advanced from "./levels/Advanced.js";
import Quiz1 from "./questionnaire/Quiz1.js";
import Quiz2 from "./questionnaire/Quiz2.js";
import Addresource from "./addresource/Addresource.js";
import Fire  from "./config/fire";
import Header from "../components/header/Header.js";
import Ebooks from "./ebooks/Ebooks.js";



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      visible:false,
      loginStatus:"not logged in",
      userName:"",
      userId:'',
      level:"",
      isNew:true,
      newUserMsg:"",
      lastActivity:"",
      askToContinue:""
    }
  }
  componentDidMount(){
    this.authListener();
  }

  authListener(){
    this.setState({
      userName:""
    });
    Fire.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({
          userId:user.uid,
          loginStatus: "logged in"
        });
        this.database = Fire.database().ref().child('User/'+user.uid);
        this.database.on('value', snap =>{
          if(snap.val().userType==="student"){
            this.setState({
              userName:snap.val().firstname,
              level:snap.val().level,
              newUserMsg:"Welcome" 
            });
            alert("This is a student");
            this.openModal();
          }
          else if(snap.val().userType==="expert"){
            this.setState({
              userName:snap.val().firstname
            });
            alert("This is an expert.");
          }
          else{
            alert("User not found!");
          }
        });
      }
      else{
        this.setState({user: null});
      }
    });
  }
  openModal(){
    this.setState({
      visible : true
    });
  }
  closeModal(){
    this.setState({
    visible : false
    });
  }
  render() {
    return (
      	<Router>
      		<Switch>
      			<Route 
              exact 
              path={"/"}
        			render = {props =>(
                <Landing 
                  { ...props} 
                  loginStatus={this.state.loginStatus}
                  userName = {this.state.userName}
                />
              )}>
      			</Route>

      			<Route 
              path={"/questionnaire"}
              render = {props =>(
              <Questionnaire 
                { ...props} 
                loginStatus={this.state.loginStatus}
                userName = {this.state.userName}
                level = {this.state.level}
              />
              )}>
     				</Route>

            <Route 
              path={"/Header"}
              render = {props =>(
              <Header 
                { ...props} 
                logout={this.state.logout}
                userName = {this.state.userName}
              />
              )}>
            </Route>

            <Route 
              path={"/Addresource"}
              render = {props =>(
                <Addresource
                  {...props}
                  loginStatus = {this.state.loginStatus}/>
              )}>
            </Route>

            <Route 
              path={"/ebooks"}
              render = {props =>(
              <Ebooks { ...props} loginStatus={this.state.loginStatus}/>
              )}>
            </Route>

     				<Route path={"/signin"}
              render = {props =>(
              <SignIn { ...props} loginStatus={this.state.loginStatus}/>
            )}>
     				</Route>

            <Route path={"/signup"}
              render = {props =>(
              <SignUp { ...props} loginStatus={this.state.loginStatus}/>
            )}>
            </Route>

            <Route path={"/forgotpassword"}
              render = {props =>(
              <ForgotPassword { ...props} loginStatus={this.state.loginStatus}/>
            )}>
            </Route>

     				<Route path={"/beginner"}
              render = {props =>(
              <Beginner { ...props} loginStatus={this.state.loginStatus}/>
              )}>
            </Route>

       			<Route path={"/intermediate"}
                render = {props =>(
                <Intermediate { ...props} loginStatus={this.state.loginStatus}/>
              )}>
       			</Route>

       			<Route path={"/advanced"}
                render = {props =>(
                <Advanced { ...props} loginStatus={this.state.loginStatus}/>
              )}>
       			</Route>

            <Route path="/Quiz1">
                <Quiz1/>
            </Route>

            <Route path="/Quiz2">
                <Quiz2/>
            </Route>
     			</Switch>
            <Modal visible={this.state.visible} width="400" height="170" effect= "fadeInUp" onClickAway={() => this.closeModal()}>
            <Container style={{backgroundColor:"#ccd8ff"}}>
                <p className=" float-centre" style={{fontSize:"30px", fontWeight:"bold", color: "#009900"}}>Welcome {this.state.userName}</p>
                <p style={{fontSize:"16px", fontWeight:"bold"}}>You on {this.state.level}'s level, continue?</p>
              <hr/>
              <Link to= {this.state.level}>
                <Button className="float-left" onClick={()=>this.closeModal()}>
                  Yes
                </Button>
              </Link>
              <Button className="float-right" onClick = {()=>this.closeModal()}>
                Cancel
              </Button>
            </Container>
          </Modal>
        </Router>
    );
  }
}
