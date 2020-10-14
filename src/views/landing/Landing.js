//React stuff
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//reactstrap API
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

//list of possible resources and their description
import { commonSearchs } from "../resources/commonsearchs.js";

//Views
//import questionnaire from "../questionnaire/questionnaire.js";

//Firebase
import fire from "../../views/config/fire.js";

export default class Landing extends Component{
	constructor(props){
		super(props);
		this.state={
			userName:this.props.userName,
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

	//After the page is rendered load all the resources
	componentDidMount() {
	  const beginnerRef = fire.database().ref('resource/beginner/');
	  const advancedRef = fire.database().ref('resource/advanced');
	  const intermediateRef = fire.database().ref('resource/intermediate');

	  //Load beginner resources
	  beginnerRef.orderByChild("rating").on('value', (snapshot) => {
	  	let temp1 = [];
	  	let temp2 = [];
	    snapshot.forEach( function(type){
	    	//load videos to temporary array
	    	if(type.key == "videos"){
	    		type.forEach( function(res){
	    			temp1.push(res.val());
	    		});
	    	}
	   		//load videos to temporary array
	    	else if(type.key == "webpages"){
	    		type.forEach( function(res){
	    			temp2.push(res.val());
	    		});
	    	}
	    });

	    //Set the temporary array equal to global array
	    this.setState({
	    	begv: temp1,
	    	begw: temp2
	    });
	  });

	  //Load intermediate resources
	  intermediateRef.orderByChild("rating").on('value', (snapshot) => {
	  	let temp1 = [];
	  	let temp2 = [];
	    snapshot.forEach( function(type){
	    	//load videos to temporary array
	    	if(type.key == "videos"){
	    		type.forEach( function(res){
	    			temp1.push(res.val());
	    		});
	    	}
	    	//load webpages to temporary array
	    	else if(type.key == "webpages"){
	    		type.forEach( function(res){
	    			temp2.push(res.val());
	    		});
	    	}
	    });
	    //Set the temporary array equal to the gloabal array
	    this.setState({
	    	intv: temp1,
	    	intw: temp2
	    });
	  });

	  //load advanced resources
	  advancedRef.orderByChild("rating").on('value', (snapshot) => {
	  	let temp1 = [];
	  	let temp2 = [];
	    snapshot.forEach( function(type){
	    	//load videos to temporary array
	    	if(type.key == "videos"){
	    		type.forEach( function(res){
	    			temp1.push(res.val());
	    		});
	    	}
	    	//load webpages to temporary array
	    	else if(type.key == "webpages"){
	    		type.forEach( function(res){
	    			temp2.push(res.val());
	    		});
	    	}
	    });
	    //set the temporary array equal to the global array
	    this.setState({
	    	advv: temp1,
	    	advw: temp2
	    });
	  });
	}

	//Display landing page to the user
	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px",position:"absolute"}}>
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
				 		<Button  variant="contained" className="buttons" size = "small" style={{backgroundColor:"#5bc0de"}}>
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
					<Link to="beginner" className="links"><Button  variant="contained" size = "small" className="buttons" style={{backgroundColor:"#5bc0de"}}> More </Button></Link>
				</div>
			</Container>
				<hr/>
			<Container>
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
					<Link to="intermediate" className="links"><Button  variant="contained" size = "small" className="buttons" style={{backgroundColor:"#5bc0de"}}> More </Button></Link>
				</div>
			</Container>
				<hr/>
			<Container style={{paddingBottom:"30px"}}>
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
					<Link to="advanced" className="links"><Button  variant="contained" size = "small" className="buttons" style={{backgroundColor:"#5bc0de"}}> More </Button></Link>
				</div>

			</Container>
			</Container>
		);
	}
}
