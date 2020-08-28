import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

//React Bootstrap API
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Components/LP_button.scss';
import Beginner from "./Components/Beginner.js";


export default class Questionnaire extends Component{
    style ={
        fontSize: 17,
        fontWeight: 'bold'
    }
    render() { 
        return (
            <div>
                <Form>
                    <Form.Label as="legend" column sm={2}>
                        <p style={this.style}>Select level</p>
                    </Form.Label>
                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                type="radio"
                                label="Beginner"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="Intermediate"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Advanced"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                        </div>
                    ))}
                </Form>
                <div className="button-nav">
                <Link to="/Beginner">
                    <Button className="btn btn-default btn-sm">
                        <span className="glyphicon glyphicon-chevron-down"></span>Take a learning path</Button>
                </Link> 
                </div>
            </div>
        );
		
	}
}




/*return(

            <Container>
                <Dropbox/>
                <p>There is a learning path specially made for you based on the level you selected.</p>
                <LPButton/>
                <li></li>
                <HomeButton/>
            </Container>  
        );*/