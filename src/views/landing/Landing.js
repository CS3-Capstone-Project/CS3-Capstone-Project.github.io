import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//React Bootstrap API
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

//Styles
import "./Landing.scss";

//Views
import questions from "../questionnaire/questionnaire.js";

export default class Landing extends Component{
	render(){
		return(
			<Container className="center-v">
				<Row>
					<Col>
						<Jumbotron className="center-h landing-cover">
							<h1>Hi, are you a</h1>
							<p> <Button variant="info"> Student </Button> &nbsp; or a &nbsp; <Button variant="info"> Python Expert </Button></p>

						</Jumbotron>
					</Col>
				</Row>
			</Container>
		);
	}
}