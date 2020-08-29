
import React, { Component, setState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
//React Bootstrap API
import Button from 'react-bootstrap/Button';
import {Container } from 'react-bootstrap';
import './LP_button.scss';
import pythonImg from "./python.png";
import Landing from "../landing/Landing.js";


export default class Questionnaire extends Component{
    constructor(){
        super();
        this.styles ={
            fontSize: 17,
            fontWeight: 'bold'
        };
        this.state = {
            name: "level"
        };
        this.form_control={
            background: '#ffdf80'
        };
        this.onLevelChange =this.onLevelChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    onLevelChange(event){
        this.setState({
            selectedOption:event.target.value
        });
    }
    formSubmit(event){
        event.preventDefault();
        console.log(this.state.selectedOption)
    }
    render() { 
        return (
            <Container style={this.form_control}>
                <img style={{width:"12em",margin:"5px"}} src={pythonImg}/>
                <Form onSubmit={this.formSubmit}>
                    <Form.Group>
                    <Link to="/landing">
                        <Button>Go back</Button>
                    </Link>
                    <p style={this.styles}>Take a learning path.</p>
                    <ul></ul>
                    <Form.Label style={this.styles}>select level:</Form.Label>
                    </Form.Group>
                    <ul>
                    <Form.Group>
                    <label>
                        Beginner
                        <input type="radio"
                        value="Beginner"
                        checked={this.state.selectedOption==="Beginner"}
                        onChange={this.onLevelChange}/>
                    </label>
                    </Form.Group>
                    </ul>
                    <ul>
                    <Form.Group>
                    <label>
                        Intermediate
                        <input type="radio"
                        value="Intermediate"
                        checked={this.state.selectedOption==="Intermediate"}
                        onChange={this.onLevelChange}/>
                    </label>
                    </Form.Group>
                    </ul>
                    <ul>
                    <Form.Group>
                    <label>
                        Advanced
                        <input type="radio"
                        value="Advanced"
                        checked={this.state.selectedOption==="Advanced"}
                        onChange={this.onLevelChange}/>
                    </label>
                    </Form.Group>
                    </ul>
                <div className="button-nav">
                <Link to={this.state.selectedOption}>
                    <Button className="btn btn-default btn-sm">
                        <span className="glyphicon glyphicon-chevron-down"></span>Continue</Button>
                </Link> 
                </div>
            </Form>
            </Container>
        );
		
	}
}
