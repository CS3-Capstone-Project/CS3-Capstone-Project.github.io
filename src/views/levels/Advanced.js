import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

//React Bootstrap API
import {Container} from 'reactstrap';
import {Row} from 'reactstrap';
import {Col} from 'reactstrap';
import {Image} from 'react-bootstrap';

//Styles
import "./levels.scss";

//Material UI API
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Components
import Thumbnail from "../../components/thumbnail/Thumbnail.js";
import { commonSearchs } from "../resources/commonsearchs.js";

//Firebase
import fire from "../login/config/fire.js";

export default class Advanced extends Component{
	constructor(props){
		super(props);
		this.state = {
			videos : [],
			webpages : [],
			source:"",
		    url:"",
		    topic: "",
		    description:"",
		    rating:0,
		    totalRatings:0,

		}
	}

	//After the page is rendered load advanced resources
	componentDidMount() {
	  const advancedRef = fire.database().ref('resource/advanced');

	  //load advanced resources
	  advancedRef.orderByChild("rating").on('value', (snapshot) => {
	  	let temp1 = [];
	  	let temp2 = [];
	    snapshot.forEach( function(type){
	    	//load videos to temporary array
	    	if(type.key == "videos"){
	    		type.forEach( function(res){
	    			let vids = res.val();
	    			let resVal = [];
	    			
	    			temp1.push({
				        resPath: res.ref.path.toString(),
				        source: vids.source,
				       	url: vids.url, 
				       	topic: vids.topic,
				       	description: (commonSearchs.find( ({ topic }) => topic == vids.topic)).description,
				       	rating: vids.rating,
				       	totalRatings: vids.totalRatings
				    });
	    		});
	    	}
	    	//load webpages to temporary array
	    	else if(type.key == "webpages"){
	    		type.forEach( function(res){
	    			let web = res.val();
	    			let resVal = [];
	    			
	    			temp2.push({
				        resPath: res.ref.path.toString(),
				        source: web.source,
				       	url: web.url, 
				       	topic: web.topic,
					   	description: (commonSearchs.find( ({ topic }) => topic == web.topic)).description,
				       	rating: web.rating,
				       	totalRatings: web.totalRatings
				    });
	    			
	    		});
	    	}
	    });
	    //set the temporary array equal to the global array
	    this.setState({
	    	videos: temp1,
	    	webpages: temp2
	    });
	  });
	}

	//Display page with advanced Python reasources
	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
			<Container className="wrapper">
				<div style={{textAlign:"center"}}><div ><h2>Advanced</h2></div></div>
				<div><h5>Videos</h5></div>
				<Row>
					{
						this.state.videos.map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									topic = {data.topic}
									source = {data.source} 
									desc = {data.description} 
									url = {data.url} 
									rating = {data.rating}
									user={this.props.user}
									path = {data.resPath}
									userId = {this.props.userId}
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
						this.state.webpages.map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									topic = {data.topic}
									desc = {data.description} 
									url = {data.url}
									user={this.props.user}
									path = {data.resPath}
									userId = {this.props.userId}
									rating = {data.rating} 
									style={{backgroundColor:"rgba(255,56,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>
			</Container>
    		</Container>
		);
	}
}
