import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//React Bootstrap API
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Button from 'react-bootstrap/Button';

//Material UI API
import Button from '@material-ui/core/Button';

//Styles
import "./Landing.scss";

//Components
import Thumbnail from "../../components/thumbnail/Thumbnail.js";

//Views
import questions from "../questionnaire/questionnaire.js";

export default class Landing extends Component{
	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
				<div style={{textAlign:"center"}}><div ><Image className="logo" src="./img/python.png"/></div></div>
				<hr/>
			<Container className="wrapper">
				<div><h3>Easy</h3></div>
				<div><h5>YouTube Videos</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" description="This is a description" style={{backgroundColor:"red"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"red"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"red"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"red"}}/>
					</Col>
				</Row>

				<div><h5>YouTube Playlists</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"blue"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"blue"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"blue"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"blue"}}/>
					</Col>
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"yellow"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"yellow"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"yellow"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"yellow"}}/>
					</Col>
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"brown"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"brown"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"brown"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"brown"}}/>
					</Col>
				</Row>
				<hr/>

				<div><h3>Intermediate</h3></div>
				<div><h5>YouTube Videos</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"red"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"red"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"red"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"red"}}/>
					</Col>
				</Row>

				<div><h5>YouTube Playlists</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"blue"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"blue"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"blue"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"blue"}}/>
					</Col>
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"yellow"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"yellow"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"yellow"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"yellow"}}/>
					</Col>
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"brown"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"brown"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"brown"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"brown"}}/>
					</Col>
				</Row>
				<hr/>
				<div><h3>Hard</h3></div>
				<div><h5>YouTube Videos</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"red"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"red"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"red"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"red"}}/>
					</Col>
				</Row>

				<div><h5>YouTube Playlists</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"blue"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"blue"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"blue"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"blue"}}/>
					</Col>
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"yellow"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"yellow"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"yellow"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"yellow"}}/>
					</Col>
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"brown"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"brown"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"brown"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"brown"}}/>
					</Col>
				</Row>

			</Container>
			</Container>
		);
	}
}