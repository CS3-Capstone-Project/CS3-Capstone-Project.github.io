import React, { Component } from 'react';
import "./App.scss";

//Views
import Questionnaire from "./questionnaire/questionnaire.js";

class App extends Component {
  render() {
    return (
    	<Questionnaire/>
    );
  }
}

export default App;