
import React, { Component, setState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Form} from 'reactstrap';
//React Bootstrap API

import {Container,Button } from 'reactstrap';
import './LP_button.scss';
import pythonImg from "./python.png";
import Landing from "../landing/Landing.js";

//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import {Col,Row} from 'reactstrap';

import {Jumbotron} from 'react-bootstrap';

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
                    <Link to="/">
                        <Button>Go back</Button>
                    </Link>
                    <p style={this.styles}>Take a learning path.</p>
                    <p style={this.styles}>select level:</p>
                    <ul>
                    <li>
                    <label>
                        Beginner
                        <input type="radio"
                        value="Beginner"
                        checked={this.state.selectedOption==="Beginner"}
                        onChange={this.onLevelChange}/>
                    </label>
                    </li>
                    <li>
                    <label>
                        Intermediate
                        <input type="radio"
                        value="Intermediate"
                        checked={this.state.selectedOption==="Intermediate"}
                        onChange={this.onLevelChange}/>
                    </label>
                    </li>
                    <li>
                    <label>
                        Advanced
                        <input type="radio"
                        value="Advanced"
                        checked={this.state.selectedOption==="Advanced"}
                        onChange={this.onLevelChange}/>
                    </label>
                    </li>
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
