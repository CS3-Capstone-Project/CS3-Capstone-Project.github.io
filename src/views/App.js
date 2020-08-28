import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Components
import Questionnaire from "./questionnaire/questionnaire.js";
import Login from "./login/Login.js";
import Landing from "./landing/Landing.js";

//Styles
import "./App.scss";

//Bootstrap React API
//import Button from 'react-bootstrap/Button';

//Material UI API
import Button from '@material-ui/core/Button';

export default class App extends Component {
  render() {
    return (
    	<Router>
    		<Switch>
    			<Route exact path="/"> 
    				<Landing/>
    			</Route>

    			<Route path="/questionnaire">
    				<Questionnaire/>
   				</Route>

   				<Route path="/login">
   					<Login/>
   				</Route>
   			</Switch>
    	</Router>
    );
  }
}