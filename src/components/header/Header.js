import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';

//Firebase 
import Fire from "../../views/login/config/fire";

//React Bootstrap API
import {Image, Navbar, Dropdown, DropdownButton, Nav, NavDropdown} from 'react-bootstrap';

//Reactstrap API
import {Col,Container,Row} from 'reactstrap';

//Material UI API
import Button from '@material-ui/core/Button';
import SearchBar from "../../components/SearchBar.js";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//Styles 
import "./Header.scss";

export default class Header extends Component{
	constructor(props){
		super(props);
		this.state={
			currentPage:"",
			user: null
		}

		this.signout = this.signout.bind(this);
	}

	//Sign out user
	signout(){
		Fire.auth().signOut()
		.then(()=>{
			if(this.props.user != null){
				this.props.handleUser(null);
				alert("Signing out");
			}

		}).catch((error)=>{
			let errorCode = error.code;
	      	let errorMessage = error.message;
	      	alert(errorMessage);
		});
	}

	render(){
		return(
			<Navbar className="my-nav-styles" expand="lg">
				<Navbar.Brand>
					<Link to="/">
						<div className="logo-wrapper">
							<Image className="logo" src="./img/python.png"/>
						</div>
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle arial-controls="basic-navbar-nav"/>

				<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link>
								<Link to="/" className="links">Home</Link> 
							</Nav.Link>
							<NavDropdown title="Resources" id="collapsible-nav-dropdown" className="links">
								<NavDropdown.Item href="beginner">
									<Link to="/beginner" className="links">Beginner</Link>
								</NavDropdown.Item>
								<NavDropdown.Item href="intermediate">
									<Link to="/intermediate" className="links">Intermediate</Link>
								</NavDropdown.Item>
								<NavDropdown.Item href="advanced">
									<Link to="/advanced" className="links">Advanced</Link>
								</NavDropdown.Item>
							</NavDropdown>
							
							<Nav.Link>
								<Link to="/ebooks" className="links">eBooks</Link> 
							</Nav.Link>
							{/*
							<Nav.Link>
								<Link to="/login" className="links">Expert</Link> 
							</Nav.Link>*/}
						</Nav>
					

					<Nav style={{display:"flex"}}>
						<div className="searchBar">
							<SearchBar/>
						</div>
						&nbsp;
						{this.props.user ?
							<div>
							<Button onClick={this.signout} style={{padding:"7px", paddingRight:"17px" ,outline:"none"}} variant="outlined" color="primary">
		        				 &nbsp; Sign Out
		      				</Button>
		      				&nbsp;
		      				<Link to="/profilepage" className="links">
		      					<AccountCircleIcon style={{height:"40px"}} color="primary" fontSize="large"/>
		      				</Link>

		      				</div>
		      				:
		      				<Link to="/signin" className="links">
							<Button style={{padding:"1.5px", paddingRight:"5px", outline:"none"}} variant="outlined" color="primary">
		        				<AccountCircleIcon fontSize="large" /> &nbsp; Sign In
		      				</Button>
		      				</Link>
	      				}
					</Nav>
				</Navbar.Collapse>
				</Navbar>
		);
	}
}