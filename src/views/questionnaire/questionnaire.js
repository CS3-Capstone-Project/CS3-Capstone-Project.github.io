import React, { Component } from "react";

//React Bootstrap API

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Dropbox from "./Components/dropbox.jsx";
import LPButton from "./Components/LP_button.jsx";
import HomeButton from "./Components/homeButton.jsx"

export default class Questionnaire extends Component{
	render(){
		return(

			<ul>
                <Dropbox/>
                <p>There is a learning path specially made for you based on the level you selected.</p>
                <LPButton/>
                <li></li>
                <HomeButton/>
            </ul>  
		);
	}
}