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
<<<<<<< HEAD
import {Jumbotron} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
=======

>>>>>>> 462c22ad1b840d3f51571b3a30185fed359a4a1f

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
<<<<<<< HEAD
					<ShareIcon onClick={copy} className="shareButton"/>
						&nbsp;
					<Rating style={{backgroundColor:""}} name= {this.props.name} size="large" precision={1} />
=======
					<ShareIcon onClick={this.copy} className="shareButton"/> 
						&nbsp; 
					<Rating style={{backgroundColor:""}} name = {this.props.id} size="large" precision={1} />
>>>>>>> 462c22ad1b840d3f51571b3a30185fed359a4a1f
					<p></p>
					{/*<p>Description of: {this.props.name}</p>*/}
				</div>
			</div>
		);
	}
<<<<<<< HEAD
}

function copy(){
	navigator.clipboard.writeText("https://livetembiso.co.za/");
	alert("Link copied to clipboard");
}
=======
}
>>>>>>> 462c22ad1b840d3f51571b3a30185fed359a4a1f
