import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

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
import questionnaire from "../questionnaire/questionnaire.js";

export default class Landing extends Component{
	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
				<div style={{textAlign:"center"}}><div ><Image className="logo" src="./img/python.png"/></div></div>
				<hr/>
			<Container className="wrapper">
				<div><h3>Beginner</h3></div>
				<div><h5>YouTube Videos</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" description="This is a description" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>YouTube Playlists</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"rgba(34,139,34,0.5)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(34,139,34,0.5)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(34,139,34,0.5)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(34,139,34,0.5)"}}/>
					</Col>
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"rgba(34,139,34,0.8)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(34,139,34,0.8)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(34,139,34,0.8)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(34,139,34,0.8)"}}/>
					</Col>
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"rgba(34,139,34,1)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(34,139,34,1)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(34,139,34,1)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(34,139,34,1)"}}/>
					</Col>
				</Row>
				<hr/>

				<div><h3>Intermediate</h3></div>
				<div><h5>YouTube Videos</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>YouTube Playlists</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"rgba(255,159,0,0.5)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(255,159,0,0.5)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(255,159,0,0.5)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(255,159,0,0.5)"}}/>
					</Col>
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"rgba(255,159,0,0.8)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(255,159,0,0.8)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(255,159,0,0.8)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(255,159,0,0.8)"}}/>
					</Col>
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"rgba(255,159,0,1)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(255,159,0,1)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(255,159,0,1)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(255,159,0,1)"}}/>
					</Col>
				</Row>
				<hr/>
				<div><h3>Advanced</h3></div>
				<div><h5>YouTube Videos</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>YouTube Playlists</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"rgba(255,56,0,0.5)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(255,56,0,0.5)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(255,56,0,0.5)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(255,56,0,0.5)"}}/>
					</Col>
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"rgba(255,56,0,0.8)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(255,56,0,0.8)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(255,56,0,0.8)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(255,56,0,0.8)"}}/>
					</Col>
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					<Col>
						<Thumbnail name="red" style={{backgroundColor:"rgba(255,56,0,1)"}}/>
					</Col>
					<Col>
						<Thumbnail name="blue" style={{backgroundColor:"rgba(255,56,0,1)"}}/>
					</Col>
					<Col>
						<Thumbnail name="yellow" style={{backgroundColor:"rgba(255,56,0,1)"}}/>
					</Col>
					<Col>
						<Thumbnail name="brown" style={{backgroundColor:"rgba(255,56,0,1)"}}/>
					</Col>
				</Row>

			</Container>
				<div className="bottom-nav">
    				<h6>Hi, are you a</h6> 
    				<Link className="links" to="/questionnaire"> <Button size = "small" style={{backgroundColor:"#5bc0de"}}>Student</Button> </Link>
    					&nbsp; or a &nbsp;
    				<Link className="links" to="/login"> <Button size = "small" style={{backgroundColor:"#5bc0de"}}> Python Expert</Button></Link>
    			</div>
			</Container>
		);
	}
}