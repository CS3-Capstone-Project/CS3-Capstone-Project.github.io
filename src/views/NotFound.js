//React stuff
import React, { Component } from "react";

//reactstrap API
import {Col,Container,Row, Jumbotron} from 'reactstrap';
import {Image} from 'react-bootstrap';

export default class NotFound extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Container style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
				<Container style={{paddingTop:"100px"}}>
				<div style={{textAlign:"center"}}>
					<h2>We can't find that page</h2>
					<Image src="./img/misled.gif"/>
				</div>
				</Container>
			</Container>
		);
	}
}