import React, { Component, setState } from 'react';
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
    state = {
        level: "Beginner"
    };
    onChange = e =>{
        this.setState({value: e.target.value});
    }
    render() { 
        const {level} = this.state;
        return (
            <div>
                <Form>
                    <h1>Current value is: {level}</h1>
                    <ul>
                    <label>
                        Beginner
                        <input type="radio"
                        value="Beginner"
                        checked={level==="Beginner"}
                        onChange={this.onChange}/>
                    </label>
                    </ul>
                    <ul>
                    <label>
                        Intermediate
                        <input type="radio"
                        value="Intermediate"
                        checked={level==="Intermediate"}
                        onChange={this.onChange}/>
                    </label>
                    </ul>
                    <ul>
                    <label>
                        Advanced
                        <input type="radio"
                        value="Advanced"
                        checked={level==="Advanced"}
                        onChange={this.onChange}/>
                    </label>
                    </ul>
                </Form>
                <div className="button-nav">
                <Link to={level}>
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