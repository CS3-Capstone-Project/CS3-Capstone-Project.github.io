import React, { Component, setState } from 'react';
import Modal from 'react-awesome-modal';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Form} from 'reactstrap';
import './LP_button.scss';
import Fire from '../login/config/fire.js';

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
            visible : true,
            user : {}
        };
        this.form_control={
            background: '#ffdf80'
        };
        this.onLevelChange =this.onLevelChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.isLoggedin = this.isLoggedin.bind(this);
        this.checkSignedIn = this.checkSignedIn.bind(this);
        this.openModal= this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount(){
        this.checkSignedIn();
    }
    checkSignedIn(){
        Fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user});
            }
            else{
                this.setState({user:null});
            }
        });
    }
    isLoggedin(){
        if(this.state.user){
            alert("You are logged in!");
        }
        else{
            return("true");
        }
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
                    <Modal visible={this.state.visible} width="400" height="200" effect= "fadeInUp" onClickAway={() => this.closeModal()}>
                        <Container style={{backgroundColor:"#5bc0de"}}>
                            <p style={{fontWeight:"bold"}}>If you are not sure which level to select, take level quiz, or test your python understanding.</p>
                            <hr/>
                            <Container style={{display:"flex", backgroundColor: "#5bc0de"}}>
                                <div className="float-left" style={{display:"flex"}}>
                                   <Link className="links" to="/Quiz1">
                                        &nbsp;&nbsp;&nbsp;
                                        <Button onClick= {this.isLoggedin} className="btn btn-primary btn-lg float-left" style={{backgroundColor:"#5bc0de"}}>
                                            Level Quiz
                                        </Button>
                                    </Link>
                                </div>
                                <div className="float-right" style={{display:"flex"}}>
                                    <Link className="links" to="/Quiz2">
                                        &nbsp;&nbsp;&nbsp;
                                        <Button className="btn btn-primary btn-lg float-right"style={{backgroundColor:"#5bc0de"}}>
                                            Test your python skills
                                        </Button>
                                    </Link>
                                </div>
                            </Container>
                            <hr/>
                            <Button className="btn btn-primary btn-lg" onClick={() => this.closeModal()} style={{backgroundColor:"#5bc0de"}}>Cancel</Button>
                        </Container>
                    </Modal>
                    <Modal visible={this.isLoggedin}>
                        <Link to ="/Login">
                            <Button>Login</Button>
                        </Link>
                        <Button onClick={() => this.closeModal()}>Cancel</Button>
                    </Modal>
                </Container>
            </Container>
        );

	}
}
