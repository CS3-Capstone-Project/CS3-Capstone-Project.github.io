import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Questionnaire from "./questionnaire/questionnaire.js";
import Beginner from "./questionnaire/Components/Beginner.js";
import Intermediate from "./questionnaire/Components/Intermediate.js";
import Advanced from "./questionnaire/Components/Advanced.js";
import "./App.scss";

//Views
//import Landing from "./landing/Landing.js";

class App extends Component {
  render() {
    return (
    	<Router>
                <div>
                	<Switch>
                		<Route exact path="/">
	                            <Questionnaire/>
	                    </Route>
	                    <Route path="/Beginner">
	                            <Beginner/>
	                    </Route>
	                    <Route path="/Intermediate">
	                            <Intermediate/>
	                    </Route>
	                    <Route path="/Advanced">
	                            <Advanced/>
	                    </Route>
                    </Switch>
                </div>
        </Router>
    );
  }
}

export default App;