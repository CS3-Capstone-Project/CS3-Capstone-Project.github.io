import React, { Component } from "react";
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

//React Js Popup
import Popup from "reactjs-popup";

//Images


export default class Thumbnail extends Component{
	constructor(props){
		super(props);
		this.state = {
			visible: false,
			rating: this.props.rating,
			numRatings: 0,
			accumulator: 0
		}

		this.calcRating = this.calcRating.bind(this);
		
	}

	calcRating(v){
		const {accumulator, numRatings, rating} = this.state
		this.setState({
			accumulator: accumulator + v,
			numRatings: numRatings + 1,
			rating: Math.round(accumulator/numRatings)
		}, () => {
			console.log("v: " + v + " accumulator: " + this.state.accumulator + " numRatings: " + this.state.numRatings);
			console.log(this.state.accumulator/this.state.numRatings);
		})
	}

	copy = () => {
		navigator.clipboard.writeText(this.props.url);
		alert("Link to " + this.props.url + " copied to clipboard");
	}
	render(){
		return(
			<div style={{zIndex:"999"}} className="thumbnail">
				<a className="links" href={this.props.url} target="_blank">
					<span className="a">
						<div className="ttop" style = {this.props.style}>
							<div className="source">{this.props.topic}</div>
							<p className="desc">{this.props.desc}</p>
						
							<p className="desc" style={{fontWeight:"bold"}} >source: {this.props.source}</p>
							
						</div>
					</span>
				</a>
				{/*
				<Modal style={{zIndex:"999"}} visible={this.state.visible} width="95%" height="600px" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                    	<div style={{display:"flex"}}>
                    		<div style={{paddingLeft:"10px"}}>
                        		<h2 >{this.props.source}</h2>
                        	</div>
                        	<a className="close" href="javascript:void(0);" onClick={() => this.closeModal()}><CloseIcon fontSize="large" style={{color:"black"}}/></a>
                        </div>
                        <iframe height="500px" width="100%" src={this.props.url}></iframe>
                    </div>
                </Modal> */}

				<div className="t-bottom">
					<ShareIcon onClick={this.copy} className="shareButton"/>
						&nbsp;
					<Rating 
						
						value={this.state.rating} 
						style={{backgroundColor:""}} 
						name = {this.props.id} 
						size="large" 
						onChange={(event,value) => { 
							this.calcRating(value);
						}}
						precision={1} />
				</div>
			</div>
		);
	}
}