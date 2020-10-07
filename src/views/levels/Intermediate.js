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

export default class Intermediate extends Component{
	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
			<div style={{display:"flex"}}> <Link to="/questionnaire"><ArrowBackIcon style={{marginTop:"35px", marginLeft:"10px"}}/></Link> <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/> {/*<h1 style={{ marginLeft:"40%"}}>Beginner</h1>*/}</div>
				<hr/>
				<div style={{textAlign:"center"}}><div ><h3>Intermediate</h3></div></div>
			<Container className="wrapper">
				<div style={{textAlign:"center"}}><div ><h3>Intermediate</h3></div></div>
				<div><h5>Youtube Videos</h5></div>
				<Row>
					{
						resources.intermediate.videos.map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url}
									rating = {data.rating} 
									style={{backgroundColor:"rgba(255,159,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					{
						resources.intermediate.webpages.map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url} 
									rating = {data.rating}
									style={{backgroundColor:"rgba(255,159,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					{
						resources.intermediate.ebooks.map((data,key) => {
							return(
								<Col>
									<Thumbnail 
									key={data.id} 
									id = {data.id} 
									source = {data.source} 
									desc = {data.desc} 
									url = {data.url}
									rating = {data.rating} 
									style={{backgroundColor:"rgba(255,159,0,0.3)"}}> 
									</Thumbnail>
								</Col>
							);
						})
					}
				</Row>
			</Container>
			{/*
			<div className="bottom-nav">
    				<h6>Hi, are you a</h6>
    				<Link to="/questionnaire" className="links"> <Button className="buttons" size = "small" style={{backgroundColor:"#5bc0de"}}>Student</Button> </Link>
    					&nbsp; or a &nbsp;
    				<Link to="/login" className="links"> <Button className="buttons" size = "small" style={{backgroundColor:"#5bc0de"}}> Python Expert</Button></Link>
    		</div>*/}
    		</Container>
		);
	}
}
