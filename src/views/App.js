import React, { Component } from 'react';
//Views
//import Landing from "./landing/Landing.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from 'react-awesome-modal';

//Components
import Questionnaire from "./questionnaire/questionnaire.js";
import Login from "./login/main.js";
import Landing from "./landing/Landing.js";
import Beginner from "./levels/Beginner.js";
import Intermediate from "./levels/Intermediate.js";
import Advanced from "./levels/Advanced.js";
import Quiz1 from "./questionnaire/Quiz1.js";
import Quiz2 from "./questionnaire/Quiz2.js";
import Addresource from "./addresource/Addresource.js";
import Fire  from "./config/fire";
import Header from "../components/header/Header.js";

//Styles
import "./App.scss";

//Bootstrap React API
import {Container} from 'reactstrap';

//Material UI API
import Button from '@material-ui/core/Button';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      visible:false,
      loginStatus:"not logged in",
      userName:"",
      userId:'',
      level:""
    }
  }
  componentDidMount(){
    this.authListener();
  }

  authListener(){
    Fire.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({
          userId:user.uid,
          loginStatus: "logged in"
        });
        this.database = Fire.database().ref().child('User/'+user.uid);
        this.database.on('value', snap =>{
          if(snap.val().userType==="Student"){
            this.setState({
              userName:snap.val().FirstName,
              level:snap.val().level
            });
            //this.signedInUsers.push(snap.val().FirstName);
            alert("This is a student");
            this.openModal();
          }
          else if(snap.val().userType==="Expert"){
            this.setState({
              userName:snap.val().FirstName
            });
            //this.signedInUsers.push(snap.val().FirstName);
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
      <div>
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
            path={"/addresource"}
            render = {props =>(
            <Addresource { ...props} loginStatus={this.state.loginStatus}/>
            )}>
            </Route>

     				<Route path={"/login"}
              render = {props =>(
              <Login { ...props} loginStatus={this.state.loginStatus}/>
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
              <p className=" float-centre" style={{fontSize:"30px", fontWeight:"bold", color: "#009900"}}>Welcome back, {this.state.userName}</p>
              <p style={{fontSize:"16px", fontWeight:"bold"}}>You left on {this.state.level} level, would you like to continue?</p>
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
      </div>
    );
  }
}
