import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//React Bootstrap API
import {Container, Row, Col} from 'reactstrap';
import {Image} from 'react-bootstrap';

//Styles

//Firebase
import fire from "../login/config/fire.js";

//Material UI API
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Components
import Thumbnail from "../../components/thumbnail/Thumbnail.js";
import Header from "../../components/header/Header.js";

import { resources } from "../resources/data.js";

export default class Ebooks extends Component{
	constructor(props){
		super(props);
		this.state = {
			res : [],
			source:"",
		    url:"",
		    description:"",
		    rating:0,
		    totalRatings:0,

		}
	}

	componentDidMount() {
		const baseRef = fire.database().ref('ebooks');
		baseRef.on('value', (currentfire) => {
	    let base = currentfire.val();
	    let temp = [];
	    for (let data in base) {
	      temp.push({
	        id: data,
	        source: base[data].source,
	        description: base[data].description,
	        url: base[data].url,
	        rating: base[data].rating,
	        totalRatings: base[data].totalRatings,
	      });
	    }
	    this.setState({
	      res: temp
	    });
	  });
	}

	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
				<Header/>
				<Container className="wrapper">
					<div style={{textAlign:"center", paddingBottom:"40px"}}><div ><h2>eBooks</h2></div></div>
					<Row>
						{
							this.state.res.map((data,key) => {
								return(
									<Col>
										<Thumbnail 
										key={data.id} 
										id = {data.id} 
										source = {data.source} 
										topic = {data.topic}
										desc = {data.description} 
										url = {data.url} 
										rating = {data.rating}
										style={{backgroundColor:"rgba(104, 46, 26,0.6)"}}> 
										</Thumbnail>
									</Col>
								);
							})
						}
					</Row>

				</Container>
    		</Container>
		);
	}
}