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
import Header from "../../components/header/Header.js";
import { commonSearchs } from "../resources/commonsearchs.js";

import { resources } from "../resources/data.js";

//Firebase
import fire from "../../views/config/fire.js";

export default class Advanced extends Component{
	constructor(props){
		super(props);
		this.state = {
			student:false,
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

	componentDidMount() {

		fire.auth().onAuthStateChanged((user) =>{
      		if(user){
      			this.database = fire.database().ref().child('User/'+user.uid);
      			this.database.on('value', snap =>{
          			if(snap.val().userType==="student"){
            			this.setState({
    						student:true
            			});
            		}
            	});
            }
        });
	  	const webRef = fire.database().ref('resource/advanced/webpages');
	  	const videosRef = fire.database().ref('resource/advanced/videos');
	  	videosRef.on('value', (snapshot) => {
		    let vids = snapshot.val();
		    let temp = [];
		    for (let item in vids) {
		      temp.push({
		        id: item,
		        source: vids[item].source,
		       	url: vids[item].url, 
		       	topic: vids[item].topic,
		       	description: (commonSearchs.find( ({ topic }) => topic == vids[item].topic )).description,
		       	rating: vids[item].rating,
		       	totalRatings: vids[item].totalRatings
		      });
		    }
		    this.setState({
		      videos: temp
		    });
		  });

	  webRef.on('value', (snapshot) => {
	    let web = snapshot.val();
	    let temp = [];
	    for (let item in web) {
	      temp.push({
	        id: item,
	        source: web[item].source,
	       	url: web[item].url, 
	       	topic: web[item].topic,
	       	description: (commonSearchs.find( ({ topic }) => topic == web[item].topic )).description,
	       	rating: web[item].rating,
	       	totalRatings: web[item].totalRatings
	      });
	    }
	    this.setState({
	      webpages: temp
	    });
	  });
	}

	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
				<Header/>
				<Container className="wrapper">
				{this.state.student ?(
					<>
						<Link to="/Quiz2">
							<Button className="btn btn-primary btn-lg"style={{backgroundColor:"#5bc0de"}}>Take a learning path</Button>
						</Link>
					</>) : (
					<><p>Enjoy.</p></>)}
					<Container className="wrapper">
						<div style={{textAlign:"center"}}><div ><h2>Advanced</h2></div></div>
						<div><h5>Videos</h5></div>
						<Row>
							{this.state.videos.map((data,key) => {
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
										style={{backgroundColor:"rgba(255,56,0,0.3)"}}> 
										</Thumbnail>
									</Col>
								);
							})}	
						</Row>

						<div><h5>Webpages</h5></div>
						<Row>
							{this.state.webpages.map((data,key) => {
								return(
									<Col>
										<Thumbnail 
										key={data.id} 
										id = {data.id} 
										source = {data.source} 
										topic = {data.topic}
										desc = {data.description} 
										url = {data.url}
										rating = {data.rating} 
										style={{backgroundColor:"rgba(255,56,0,0.3)"}}> 
										</Thumbnail>
									</Col>
								);
							})}
						</Row>
					</Container>
    			</Container>
    		</Container>
		);
	}
}
