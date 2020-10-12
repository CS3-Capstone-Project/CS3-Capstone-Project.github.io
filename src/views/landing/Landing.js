import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

//React Bootstrap API
//import Container from 'react-bootstrap/Container';
import {Image} from 'react-bootstrap';
//import Row from 'react-bootstrap/Row';
import {Col,Container,Row, Jumbotron} from 'reactstrap';

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

import { commonSearchs } from "../resources/commonsearchs.js";

//Views
//import questionnaire from "../questionnaire/questionnaire.js";

//Firebase
import fire from "../login/config/fire.js";

export default class Landing extends Component{
	constructor(props){
		super(props);
		this.state = {
			advv : [],
			advw : [],
			begv : [],
			begw : [],
			intv : [],
			intw : [],
			source:"",
		    url:"",
		    topic: "",
		    description:"",
		    rating:0,
		    totalRatings:0,

		}
	}

	componentDidMount() {
	  const beginnerRef = fire.database().ref('resource/beginner/');
	  const advancedRef = fire.database().ref('resource/advanced');
	  const intermediateRef = fire.database().ref('resource/intermediate');

	  beginnerRef.orderByChild("rating").on('value', (snapshot) => {
	  	let temp1 = [];
	  	let temp2 = [];
	    snapshot.forEach( function(type){
	    	if(type.key == "videos"){
	    		type.forEach( function(res){
	    			temp1.push(res.val());
	    		});
	    	}
	    	else if(type.key == "webpages"){
	    		type.forEach( function(res){
	    			temp2.push(res.val());
	    		});
	    	}
	    });
	    this.setState({
	    	begv: temp1,
	    	begw: temp2
	    });
	  });

	  intermediateRef.orderByChild("rating").on('value', (snapshot) => {
	  	let temp1 = [];
	  	let temp2 = [];
	    snapshot.forEach( function(type){
	    	if(type.key == "videos"){
	    		type.forEach( function(res){
	    			temp1.push(res.val());
	    		});
	    	}
	    	else if(type.key == "webpages"){
	    		type.forEach( function(res){
	    			temp2.push(res.val());
	    		});
	    	}
	    });
	    this.setState({
	    	intv: temp1,
	    	intw: temp2
	    });
	  });

	  advancedRef.orderByChild("rating").on('value', (snapshot) => {
	  	let temp1 = [];
	  	let temp2 = [];
	    snapshot.forEach( function(type){
	    	if(type.key == "videos"){
	    		type.forEach( function(res){
	    			temp1.push(res.val());
	    		});
	    	}
	    	else if(type.key == "webpages"){
	    		type.forEach( function(res){
	    			temp2.push(res.val());
	    		});
	    	}
	    });
	    this.setState({
	    	advv: temp1,
	    	advw: temp2
	    });
	  });
	}

	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px",position:"absolute"}}>
				<Header/>
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
						this.state.begv.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {(commonSearchs.find( ({ topic }) => topic == data.topic )).description} 
									topic = {data.topic}
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
						this.state.begw.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {(commonSearchs.find( ({ topic }) => topic == data.topic )).description} 
									topic = {data.topic}
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
						this.state.intv.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {(commonSearchs.find( ({ topic }) => topic == data.topic )).description}
									topic = {data.topic}
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
						this.state.intw.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {(commonSearchs.find( ({ topic }) => topic == data.topic )).description} 
									topic = {data.topic}
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
						this.state.advv.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {(commonSearchs.find( ({ topic }) => topic == data.topic )).description}
									topic = {data.topic} 
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
						this.state.advw.slice(0,4).map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {(commonSearchs.find( ({ topic }) => topic == data.topic )).description}
									topic = {data.topic}
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
