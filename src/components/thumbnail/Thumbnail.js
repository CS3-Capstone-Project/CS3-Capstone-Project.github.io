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


export default class Thumbnail extends Component{
	render(){
		return(
			<div className="">
				<a className="a" target="_blank" href="https://livetembiso.co.za/">
					<div className="ttop" style = {this.props.style}>
						{this.props.name}
					</div>
				</a>

				<div className="t-bottom">
					<ShareIcon onClick={copy} 
						style={{backgroundColor:"", marginTop:"-20px", cursor:"copy"}}/> 
						&nbsp; 
					<Rating style={{backgroundColor:""}} name= {this.props.name} size="large" precision={1} />
					<p>Description of: {this.props.name}</p>
				</div>
			</div>
		);
	}
}

function copy(){
	navigator.clipboard.writeText("https://livetembiso.co.za/");
	alert("Link copied to clipboard");
}