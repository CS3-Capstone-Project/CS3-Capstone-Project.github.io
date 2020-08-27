import React,{useState} from 'react';
import { Button, FormGroup, FormControl, ControlLabel,Image,Container } from "react-bootstrap";
import loginImg from "../../login.svg"
import "./Login.css"
import "./App.css"
export class Register extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return
		<div className="base-container" ref={this.props.containerRef}>
			<div className="header">Register</div>
			<div className="content">
				<div className="image">
					<img src={loginImg}/>
				</div>
				<div className="form">
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input type="text" name="username" placeholder="username"/>
					</div>
          <div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" placeholder="Email"/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" placeholder="password"/>
					</div>
				</div>
			</div>
			<div className="footer">
				<button type="button" className="btn">Register</button>
			</div>
		</div>
	}
}
export default Register
