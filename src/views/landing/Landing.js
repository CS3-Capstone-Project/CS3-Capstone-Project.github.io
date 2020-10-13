import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

//React Bootstrap API
//import Container from 'react-bootstrap/Container';
import {Image} from 'react-bootstrap';
//import Row from 'react-bootstrap/Row';
import {Col,Container,Row, Jumbotron} from 'reactstrap';

//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Button from 'react-bootstrap/Button';

//Material UI API
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

//Styles
import "./Landing.scss";

//Components
import Thumbnail from "../../components/thumbnail/Thumbnail.js";
import SearchBar from "../../components/SearchBar.js";
import Header from "../../components/header/Header.js";
import FloatingButton from "../../components/floatingButton/FloatingButton.js";

//Resources
import { resources } from "../resources/data.js";
//import { beginnerRes } from "../resources/beginnerResources.js";
//import { intermediateRes } from "../resources/intermediateResources.js";
//import { advancedRes } from "../resources/advancedResources.js";

//Views
//import questionnaire from "../questionnaire/questionnaire.js";

export default class Landing extends Component{
	constructor(props){
		super(props);
	}

	getTopFour(resourceArray){
		resourceArray.sort(
			function(a,b){
				return a - b;
			}
		);

		return resourceArray.slice(0,4);
	}

	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px",position:"absolute"}}>
				<Header/>
				<p style={{fontSize:"20px", fontWeight:"bold"}}>{this.props.userName}</p>
				<FloatingButton/>
			<Container className="wrapper">
			 	<Jumbotron>
			 		<h3 style={{textDecoration:"none"}}>Python Description</h3>
			 		<hr/>
			 		<p>
			 			Python is an interpreted, high-level, general-purpose programming language. 
			 			Created by Guido van Rossum and first released in 1991, Python's design 
			 			philosophy emphasizes code readability with its notable use of significant whitespace.
			 			Its language constructs and object-oriented approach aim to help programmers write clear, 
			 			logical code for small and large-scale projects.
			 		</p>
			 		<a style={{textDecoration:"none"}} href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">
				 		<Button className="buttons" size = "small" style={{backgroundColor:"#5bc0de"}}>
				 			More about Python
				 		</Button>
			 		</a>
			 	</Jumbotron>
			 	
				<div><h3>Beginner</h3></div>
				<div><h5>Youtube Videos</h5></div>
				
				<Row>
					{
						resources.beginner.videos.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url} 
									rating = {data.rating}
									style={{backgroundColor:"rgba(34,139,34,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					{
						resources.beginner.webpages.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url} 
									rating = {data.rating}
									style={{backgroundColor:"rgba(34,139,34,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					{
						resources.beginner.ebooks.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url} 
									rating = {data.rating} 
									style={{backgroundColor:"rgba(34,139,34,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div style={{textAlign:"center"}}>
					<Link to="beginner" className="links"><Button size = "small" className="buttons" style={{backgroundColor:"#5bc0de"}}> More </Button></Link>
				</div>
				<hr/>

				<div><h3>Intermediate</h3></div>
				
				<div><h5>Youtube Videos</h5></div>
				
				<Row>
					{
						resources.intermediate.videos.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url}
									rating = {data.rating} 
									style={{backgroundColor:"rgba(255,159,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					{
						resources.intermediate.webpages.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url} 
									rating = {data.rating}
									style={{backgroundColor:"rgba(255,159,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					{
						resources.intermediate.ebooks.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url}
									rating = {data.rating} 
									style={{backgroundColor:"rgba(255,159,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div style={{textAlign:"center"}}>
					<Link to="intermediate" className="links"><Button size = "small" className="buttons" style={{backgroundColor:"#5bc0de"}}> More </Button></Link>
				</div>
				<hr/>
				<div><h3>Advanced</h3></div>
				
				<div><h5>Youtube Videos</h5></div>
				
				<Row>
					{
						resources.advanced.videos.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url} 
									rating = {data.rating}
									style={{backgroundColor:"rgba(255,56,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					{
						resources.advanced.webpages.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url}
									rating = {data.rating} 
									style={{backgroundColor:"rgba(255,56,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					{
						resources.advanced.ebooks.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url}
									rating = {data.rating} 
									style={{backgroundColor:"rgba(255,56,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>
				<div style={{textAlign:"center"}}>
					<Link to="advanced" className="links"><Button size = "small" className="buttons" style={{backgroundColor:"#5bc0de"}}> More </Button></Link>
				</div>

			</Container>
			</Container>
		);
	}
}
