//React stuff
import React, { Component } from "react";

//Modal by react-awesome-modal
import Modal from 'react-awesome-modal';

//Icons
import { MdShare } from 'react-icons/md';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

//Styles
import "./Thumbnail.scss";

// Material UI API
import Rating from '@material-ui/lab/Rating';
import ShareIcon from '@material-ui/icons/Share';
import CloseIcon from '@material-ui/icons/Close';

//React Bootstrap API
import {Jumbotron} from 'react-bootstrap';
import Button from '@material-ui/core/Button';

//Firebase
import fire from "../../views/login/config/fire.js";

export default class Thumbnail extends Component{
	constructor(props){
		super(props);
		this.state = {
			visible: false,
			rating: this.props.rating,
			numRatings: 0,
			sumRatings: 0,
			rated:false,
			viewed:false,
			rating:0,
		}

		this.updateRating = this.updateRating.bind(this);
		this.didView = this.didView.bind(this);
		this.copy = this.copy.bind(this);
	}

	//after the page has been rendered work on the database
	componentDidMount(){
		let resourceRef = fire.database().ref(this.props.path);
		let userId = this.props.userId;
		resourceRef.on('value', (snapshot) => {
			let resData = snapshot.val();
			//Check if user is logged in before doing anything
			if(userId){
				let userRef = snapshot.child('users').child(userId);
				let ratedValue = false;
				let viewValue = false;
				//Check if user has ever interacted with this resources
				snapshot.child("users").forEach( function(res){
					if(res.val() == userId){
						if(!userRef.child('viewed')){
							userRef.child('viewed').set(false);
							userRef.child('rate').set(false);
						}else if(userRef.child('viewed')){
							viewValue = true;
						}else if(userRef.child('rate')){
							ratedValue = true;
						}
					}
		    	});
		    	//If current user has rated or viewed the resource record that locally
		    	if(ratedValue || viewValue){
			    	this.setState({
			    		rated:ratedValue,
			    		viewed: viewValue
			    	});
		    	}
			}
			//if no on has rated the resource don't calculate rating
			if(resData.numRatings >= 1){
				this.setState({
					numRatings: resData.numRatings,
					sumRatings: resData.sumRatings,
					rating: Math.round(resData.sumRatings/resData.numRatings),
				});
			}
		});
	}

	//Record that this user viewed this resource
	didView(){
		console.log(this.state.viewed && !this.state.rated);
		if(this.props.user){
			this.setState({
				viewed: true
			},()=>{
				let resourceRef = fire.database().ref(this.props.path);
				resourceRef.child("users").child(this.props.userId).child('viewed').set(this.state.viewed);
			});
		}
	}

	//Update resource meta data when user rates resource
	updateRating(event,value){
		this.setState({
			numRatings: this.state.numRatings + 1,
			sumRatings: this.state.sumRatings + value,
		},  ()=>{
			
			if(this.state.viewed){
				//If user has never rated the resource allow them to rate it
				if(!this.state.rated){

					let resourceRef = fire.database().ref(this.props.path);
				    let userPath = "users." + this.props.userId;
				    resourceRef.update({
				    	numRatings: this.state.numRatings,
				        sumRatings: this.state.sumRatings,
				    });
				    
				    resourceRef.child("users").child(this.props.userId).child('rate').set(true);

				    this.setState({
				    	rated:true,
				    	rating: Math.round(this.state.sumRatings/this.state.numRatings)
				    });
				}
			}
		});
	}


	//Copy resource url to user clipboard
	copy = () => {
		navigator.clipboard.writeText(this.props.url);
		alert("Link to " + this.props.url + " copied to clipboard");
	}

	//Display a thumbnail for the resources
	render(){
		return(
			<div style={{zIndex:"999"}} className="thumbnail">
				<a className="links" onClick={this.didView} href={this.props.url} target="_blank">
					<span className="a">
						<div className="ttop" style = {this.props.style}>
							<div className="source">{this.props.topic}</div>
							<p className="desc">{(this.props.desc).slice(0,100)}</p>
							
							<p className="desc" style={{fontWeight:"bold"}} >source: {this.props.source.slice(0,13)}</p>
						</div>
					</span>
				</a>

				<div className="t-bottom">
					<ShareIcon onClick={this.copy} className="shareButton"/>
						&nbsp;
					{ this.props.user ?
					<Rating 
						name = {this.props.id} 
						readOnly = { !this.state.viewed } 
						size="large" 
						value={this.state.rating}
						onChange={(event,value) => { 
							this.updateRating(event,value)
						}}
						precision={1} />
						:
						<Rating 
						name = {this.props.id}
						readOnly
						value={this.state.rating}
						name = {this.props.id} 
						size="large" 
						precision={1} />
					}
				</div>
			</div>
		);
	}
}