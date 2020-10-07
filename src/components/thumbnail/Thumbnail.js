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
//import Popup from "reactjs-popup";

//Images


export default class Thumbnail extends Component{
	constructor(props){
		super(props);
		this.state = {
			visible: false,
			ratingValue: this.props.rating,
			totalRatings: 0
		}

		this.calcRating = this.calcRating.bind(this)
	}

	openModal(){
		this.setState({
			visible: true
		});
	}

	closeModal(){
		this.setState({
			visible: false
		});
	}

	calcRating(v){
		this.setState((state) => {
			var decimal = ((state.ratingValue + v)/2) - Math.floor((state.ratingValue+v)/2);
			console.log("value: " + state.ratingValue + " Floored value: " + Math.floor(state.ratingValue));
			if(decimal == 0.5){
				return{ratingValue:Math.floor((state.ratingValue + v)/2)}
			}
			else{
				return{ratingValue:Math.round((state.ratingValue + v)/2)}
			}
		})
		
		console.log(v);
	}

	copy = () => {
		navigator.clipboard.writeText(this.props.url);
		alert("Link to " + this.props.url + " copied to clipboard");
	}
	render(){
		return(
			<div style={{zIndex:"999"}} className="thumbnail">

				<span className="a" onClick={() => this.openModal()}>
					<div className="ttop" style = {this.props.style}>
						<div className="source">{this.props.source}</div>
						<p className="desc">{this.props.desc}</p>
					</div>
				</span>

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
                </Modal>

				<div className="t-bottom">
					<ShareIcon onClick={this.copy} className="shareButton"/>
						&nbsp;
					<Rating 
						defaultValue={this.state.ratingValue} 
						value={this.state.ratingValue} 
						style={{backgroundColor:""}} 
						name = {this.props.id} 
						size="large" 
						onChange={(event,value) => { 
							this.calcRating(value);
						}}
						precision={1} />
					{/*<p></p>
					<p>Description of: {this.props.name}</p>*/}
				</div>
			</div>
		);
	}
}