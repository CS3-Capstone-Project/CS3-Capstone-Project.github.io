import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

//React Bootstrap API
import {Container} from 'reactstrap';
import {Row} from 'reactstrap';
import {Col} from 'reactstrap';
import {Image} from 'react-bootstrap';

//Styles
import "./levels.scss";

//Material UI API
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Components
import Thumbnail from "../../components/thumbnail/Thumbnail.js";
import Header from "../../components/header/Header.js";

import { resources } from "../resources/data.js";

export default class Advanced extends Component{
	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
				<Header/>
				<div style={{textAlign:"center"}}><div ><h3>Advanced</h3></div></div>
			<Container className="wrapper">
				<Link to="/Quiz2">
					<Button>Take a quiz</Button>
				</Link>
				<div><h5>YouTube Videos</h5></div>
				<Row>
					{
						resources.advanced.videos.map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url} 
									rating = {data.rating}
									style={{backgroundColor:"rgba(255,56,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					{
						resources.advanced.webpages.map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url}
									rating = {data.rating} 
									style={{backgroundColor:"rgba(255,56,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					{
						resources.advanced.ebooks.map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url}
									rating = {data.rating} 
									style={{backgroundColor:"rgba(255,56,0,0.3)"}}> 
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
