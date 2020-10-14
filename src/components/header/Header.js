import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';

//React Bootstrap API
//import Container from 'react-bootstrap/Container';
import {Image, Navbar, Dropdown, DropdownButton, Nav, NavDropdown} from 'react-bootstrap';

//Reactstrap API
import {Col,Container,Row} from 'reactstrap';


//Material UI API
import Button from '@material-ui/core/Button';

import SearchBar from "../../components/SearchBar.js";
import Fire from "../../views/config/fire.js";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//Styles 
import "./Header.scss";

export default class Header extends Component{
	constructor(props){
		super(props); 	
		this.state={
			signedIn:false
		}
		this.logout = this.logout.bind(this);
	}
	componentDidMount(){
    this.authListener();
  	}
	authListener(){
		Fire.auth().onAuthStateChanged((user) =>{
			if(user){
				this.setState({
					signedIn:true
				});
			}
			else{
				this.setState({
					signedIn:false
				});
			}
		});
	}
	logout(){
		Fire.auth().signOut();
		this.setState({
			signedIn:false
		});
	}
	render(){
		return(
			<Navbar sticky="top" className="my-nav-styles" expand="lg">
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
						</Nav>
					

					<Nav style={{display:"flex"}}>
						<div className="searchBar">
							<SearchBar/>
						</div>
						&nbsp;
						{this.state.signedIn ? (<>
							<Link to = "/" className="links">
							<Button onClick = {()=> this.logout()} style={{padding:"1.5px", paddingRight:"5px", outline:"none"}} variant="outlined" color="primary">
	      						<AccountCircleIcon fontSize="large" />&nbsp;sign out
	      					</Button>
	      					</Link>
	      					</>
							) : ( <>
							<Link to="/signin" className="links">
								<Button style={{padding:"1.5px", paddingRight:"5px", outline:"none"}} variant="outlined" color="primary">
	        						<AccountCircleIcon fontSize="large"/> &nbsp; Sign In
	      						</Button>
	      					</Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>	
		);
	}
}