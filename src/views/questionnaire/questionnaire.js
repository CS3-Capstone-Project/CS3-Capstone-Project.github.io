import React, { Component } from "react";

//React Bootstrap API

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './Component/dropbox.jsx';
import './Component/LP_button.jsx';

export default class Questionnaire extends Component{
	render(){
		return(
			<div><Dropbox/>
                <LPButton/>
            </div>  
		);
	}
}