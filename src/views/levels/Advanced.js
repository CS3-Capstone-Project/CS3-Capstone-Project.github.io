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
import Header from "../../components/header/Header.js";

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

	//After the page is rendered load advanced resources
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
	    //iterate through all videos resources in the database and append them to a temporary array
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
	    //set temporary array to be equal to the global array
	    this.setState({
	      videos: temp
	    });
	  });

      //iterate through all webpage resources in the database and append them to a temporary array
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

	    //set temporary array to be equal to the global array
	    this.setState({
	      webpages: temp
	    });
	  });
	}

	//Display page with advanced Python reasources
	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
				<Container className="wrapper">
					{this.state.student ?(
						<>
							<Link to="/PycatTest">
								<Button className="btn btn-primary btn-lg"style={{backgroundColor:"#5bc0de"}}>Questions</Button>
							</Link>
						</>) : (
						<><p></p></>)
					}
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
											style={{backgroundColor:"rgba(255,56,0,0.3)"}}> 
											</Thumbnail>
										</Col>
									);
								})
							}
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
