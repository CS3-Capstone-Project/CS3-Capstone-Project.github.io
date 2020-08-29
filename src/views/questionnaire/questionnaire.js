import React, { Component } from "react";

//React Bootstrap API
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import {Col,Container,Row} from 'reactstrap';

import {Jumbotron} from 'react-bootstrap';
import Button from '@material-ui/core/Button';


export default class Landing extends Component{
	render(){
		return(
			<Container className="center-v">
				<Row>
					<Col>
						Something
					</Col>
				</Row>
			</Container>
		);
	}
}
