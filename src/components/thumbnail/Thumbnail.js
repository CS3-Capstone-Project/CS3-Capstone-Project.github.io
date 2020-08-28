import React, { Component } from "react";

//Icons
import { MdShare } from 'react-icons/md';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';
//Styles
import "./Thumbnail.scss";

// Material UI API
import Rating from '@material-ui/lab/Rating';
import ShareIcon from '@material-ui/icons/Share';

//React Bootstrap API
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

//Images


export default class Thumbnail extends Component{
	copy = () => {
		navigator.clipboard.writeText("https://livetembiso.co.za/");
		alert("Link to " + this.props.name + " copied to clipboard");
	}
	render(){
		return(
			<div className="thumbnail">
				<a className="a" target="_blank" href="https://livetembiso.co.za/">
					<div className="ttop" style = {this.props.style}>
						<div className="source">Source: {this.props.name}</div>
						<p className="desc">Description: {this.props.description}</p>
					</div>
				</a>

				<div className="t-bottom">
					<ShareIcon onClick={this.copy} className="shareButton"/> 
						&nbsp; 
					<Rating style={{backgroundColor:""}} name= {this.props.name} size="large" precision={1} />
					<p></p>
					{/*<p>Description of: {this.props.name}</p>*/}
				</div>
			</div>
		);
	}
}