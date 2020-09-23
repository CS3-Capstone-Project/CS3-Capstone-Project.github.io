import React, { Component } from "react";
import {Container} from 'reactstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import {Image} from 'react-bootstrap';

export default class Quiz2 extends Component {
  render() {
    return (
    	<Container fluid style={{paddingLeft:"0", paddingRight:"0"}}>
    		<div style={{display:"flex"}}>
                <Link className="links" to="/questionnaire">
                    <ArrowBackIcon style={{marginTop:"35px"}}/> 
                </Link>
                <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/>
             </div>
             <hr/>
            <iframe src="https://www.w3resource.com/quizzes/python/python-quizzes-variable.php" width="100%" height="700" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
    	</Container>
    );
  }
}