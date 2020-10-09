import React, { Component } from 'react';
//Views
//import Landing from "./landing/Landing.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
import Fire from "./config/fire";

//Styles
import "./App.scss";

//Bootstrap React API
//import Button from 'react-bootstrap/Button';

//Material UI API
import Button from '@material-ui/core/Button';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      loginStatus: "Not logged in",
      user: {}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    Fire.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({user});
        this.setState({loginStatus: "logged in"})
      }
      else{
        this.setState({user: null});
      }
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
              <Landing { ...props} loginStatus={this.state.loginStatus}/>
            )}>
      			</Route>

      			<Route 
            path={"/questionnaire"}
            render = {props =>(
            <Questionnaire { ...props} loginStatus={this.state.loginStatus}/>
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
      	</Router>
    );
  }
}
