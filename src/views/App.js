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

   				<Route path="/beginner">
   					<Beginner/>
   				</Route>

   				<Route path="/intermediate">
   					<Intermediate/>
   				</Route>

   				<Route path="/advanced">
   					<Advanced/>
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
