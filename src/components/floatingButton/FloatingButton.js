import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';

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
			<div className="buttonWrapper links">
			<OverlayTrigger placement="left" overlay={<Tooltip >Add resource</Tooltip>}>
			  <span className="d-inline-block">
			  	<Link to="/addresource">
					<Fab id="button" color="primary" aria-label="add">
			  			<AddIcon/>
					</Fab>
				</Link>
			  </span>
			</OverlayTrigger>
			</div>
		);
	}
}