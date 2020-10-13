import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton,AppBar,TextField} from 'material-ui';
import loginImg from "./Login.svg";
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Image} from 'react-bootstrap';
import Fire from "./config/fire";

//reactstrap API
import {Col,Container,Row} from 'reactstrap';

export default class SignIn extends React.Component {

  constructor(props){
    super(props);
    this.state={
    username:'',
    password:'',
    userid:""
    }
   }

   render(){
	   	return(
	   		<Container>
	   			
	   		</Container>
	   	);
  	}
}