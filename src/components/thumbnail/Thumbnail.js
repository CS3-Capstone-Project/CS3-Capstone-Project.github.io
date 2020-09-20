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
			visible: false
		}
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

	copy = () => {
		navigator.clipboard.writeText(this.props.url);
		alert("Link to " + this.props.url + " copied to clipboard");
	}
	render(){
		return(
			<div className="thumbnail">

				<span className="a" onClick={() => this.openModal()}>
					<div className="ttop" style = {this.props.style}>
						<div className="source">{this.props.source}</div>
						<p className="desc">{this.props.desc}</p>
					</div>
				</span>

				<Modal visible={this.state.visible} width="95%" height="600px" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h2>Title</h2>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                        <iframe height="500px" width="100%" src={this.props.url}></iframe>
                    </div>
                </Modal>

				<div className="t-bottom">
					<ShareIcon onClick={this.copy} className="shareButton"/>
						&nbsp;
					<Rating style={{backgroundColor:""}} name = {this.props.id} size="large" precision={1} />
					{/*<p></p>
					<p>Description of: {this.props.name}</p>*/}
				</div>
			</div>
		);
	}
}