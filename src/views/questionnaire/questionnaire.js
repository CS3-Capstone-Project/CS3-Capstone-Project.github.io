
import React, { Component, setState } from 'react';
import Modal from 'react-awesome-modal';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Form} from 'reactstrap';
import './LP_button.scss';

import {Container} from 'reactstrap';
import {Image} from 'react-bootstrap';

//@material-ui API
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';


export default class Questionnaire extends Component{
    constructor(props){
        super(props);
        this.styles ={
            fontSize: 17,
            fontWeight: 'bold'
        };
        this.state = {
            name: "level",
            selectedOption:"Beginner",
            visible : true
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
    openModal(){
        this.setState({
            visible : true
        });
    }
    closeModal(){
        this.setState({
            visible : false
        });
    }
    render() {
        return (
            <Container fluid style={{paddingLeft:"0", paddingRight:"0"}}>
                <div style={{display:"flex"}}>
                    <Link className="links" to="/">
                        <ArrowBackIcon style={{marginTop:"35px"}}/> 
                    </Link>
                    <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/>
                </div>
                <hr/>
                <Container className="formControl" style={{backgroundColor:"#D6EAF8"}}>
                    <div ><p style={{fontWeight:"bold"}}>Select level</p></div>
                    <div style={{textAlign:"left", width:"185px",position:"relative", margin:"0 auto", backgroundColor:"#F4F6F6"}}>
                        <Form onSubmit={this.formSubmit}>
                            <ul>
                                <li>
                                    <label>
                                        <input type="radio"
                                            value="Beginner"
                                            checked={this.state.selectedOption==="Beginner"}
                                            onChange={this.onLevelChange}
                                        />
                                        &nbsp; Beginner
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio"
                                            value="Intermediate"
                                            checked={this.state.selectedOption==="Intermediate"}
                                            onChange={this.onLevelChange}
                                        />
                                        &nbsp; Intermediate
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio"
                                            value="Advanced"
                                            checked={this.state.selectedOption==="Advanced"}
                                            onChange={this.onLevelChange}
                                        />
                                        &nbsp; Advanced
                                    </label>
                                </li>
                            </ul>
                            <div style={{}}>
                                <Link className="links" to={this.state.selectedOption}>
                                    <Button className="float-left">
                                        Continue
                                    </Button>
                                </Link>
                            </div>
                        
                        </Form>
                    </div>
                    <Button onClick={() => this.openModal()}> More options </Button>
                    <hr/>
                    <iframe src="https://trinket.io/embed/python/edd948bf08" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                    <Modal visible={this.state.visible} width="185" height="200" effect= "fadeInUp" onClickAway={() => this.closeModal()}>
                        <p style={{fontWeight:"bold"}}>If you are not sure which level to select, take quiz 1. Quiz 2 is for testing your general knowledge on python.</p>
                        <hr/>
                        <Container style={{display:"flex", backgroundColor: "#f5f5f0"}}>
                            <div className="float-left" style={{display:"flex"}}>
                                <Link className="links" to="/Quiz1">
                                    &nbsp;&nbsp;&nbsp;
                                    <Button className="btn btn-primary btn-lg float-left" style={{backgroundColor:"#5bc0de"}}>
                                        Quiz 1
                                    </Button>
                                </Link>
                            </div>
                            <div className="float-right" style={{display:"flex"}}>
                                <Link className="links" to="/Quiz2">
                                    &nbsp;&nbsp;&nbsp;
                                    <Button className="btn btn-primary btn-lg float-right"style={{backgroundColor:"#5bc0de"}}>
                                        Quiz 2
                                    </Button>
                                </Link>
                            </div>
                        </Container>
                        <hr/>
                        <Button onClick={() => this.closeModal()} style={{backgroundColor:"#5bc0de"}}>Cancel</Button>
                    </Modal>
                </Container>
            </Container>
        );

	}
}
