
import React, { Component, setState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Form} from 'reactstrap';
//React Bootstrap API

import {Container} from 'reactstrap';
import Button from '@material-ui/core/Button';
import './LP_button.scss';
import pythonImg from "./python.png";
import {Image} from 'react-bootstrap';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
            name: "level",
            selectedOption:"Beginner"
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
            <Container fluid style={{paddingLeft:"0", paddingRight:"0"}}>
            <div style={{display:"flex"}}> {/*<Link to="/"><ArrowBackIcon style={{marginTop:"35px", marginLeft:"10px"}}/></Link>*/} <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/> {/*<h1 style={{ marginLeft:"40%"}}>Beginner</h1>*/}</div>
                <hr/>
                <div style={{textAlign:"center"}}><div ><h3>Select level</h3></div></div>
            <Container className="formControl">
                {/*<img style={{width:"12em",margin:"5px"}} src={pythonImg}/>*/}
                
                <div style={{textAlign:"left", width:"185px",position:"relative", margin:"0 auto"}}>
                <Form onSubmit={this.formSubmit}>
                    
                    {/*<p style={this.styles}>Take a learning path.</p>
                    <p style={this.styles}>select level:</p>*/}
                    
                    <ul>
                    <li>
                    <label>
                        <input type="radio"
                        value="Beginner"
                        checked={this.state.selectedOption==="Beginner"}
                        onChange={this.onLevelChange}/>
                        &nbsp; Beginner
                    </label>
                    </li>
                    <li>
                    <label>
                        <input type="radio"
                        value="Intermediate"
                        checked={this.state.selectedOption==="Intermediate"}
                        onChange={this.onLevelChange}/>
                        &nbsp; Intermediate
                    </label>
                    </li>
                    <li>
                    <label>
                        <input type="radio"
                        value="Advanced"
                        checked={this.state.selectedOption==="Advanced"}
                        onChange={this.onLevelChange}/>
                        &nbsp; Advanced
                    </label>
                    </li>
                    </ul>
                    <div className="button-nav">
                    <div style={{}}>
                <Link className="links" to="/">
                        <Button className="buttons" style={{backgroundColor:"#5bc0de"}}>Go back</Button>
                    </Link> &nbsp;
                <Link className="links" to={this.state.selectedOption}>
                    <Button className="buttons" style={{backgroundColor:"#5bc0de"}}>
                        Continue
                    </Button>
                </Link>
                </div>
                </div>
                
                </Form>
                </div>
            </Container>
            </Container>
        );

	}
}
