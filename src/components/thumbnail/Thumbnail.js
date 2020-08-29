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


//Images


export default class Thumbnail extends Component{
	copy = () => {
		navigator.clipboard.writeText(this.props.data.url);
		alert("Link to " + this.props.source + " copied to clipboard");
	}
	render(){
		return(
			<div className="thumbnail">
				<a className="a" target="_blank" href={this.props.url}>
					<div className="ttop" style = {this.props.style}>
						<div className="source">{this.props.source}</div>
						<p className="desc">{this.props.desc}</p>
					</div>
				</a>

				<div className="t-bottom">
					<ShareIcon onClick={this.copy} className="shareButton"/> 
						&nbsp; 
					<Rating style={{backgroundColor:""}} name = {this.props.id} size="large" precision={1} />
					<p></p>
					{/*<p>Description of: {this.props.name}</p>*/}
				</div>
			</div>
		);
	}
}