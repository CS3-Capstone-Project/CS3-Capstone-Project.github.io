import React, { Component, useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import "./floatingButton.scss";

export default class FloatingButton extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div className="buttonWrapper" >
			<OverlayTrigger placement="left" overlay={<Tooltip >Add resource</Tooltip>}>
			  <span className="d-inline-block">
				<Fab id="button" color="primary" aria-label="add">
		  			<AddIcon/>
				</Fab>
			  </span>
			</OverlayTrigger>
			</div>
		);
	}
}