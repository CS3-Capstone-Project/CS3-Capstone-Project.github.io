import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

//React Bootstrap API
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Styles
import "./levels.scss";

//Material UI API
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Components
import Thumbnail from "../../components/thumbnail/Thumbnail.js";

export default class Beginner extends Component{
	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
			<div> <Link to="/"><ArrowBackIcon style={{marginTop:"3px", marginLeft:"10px"}}/></Link> <h1>Advanced</h1></div>
				<hr/>
			<Container className="wrapper">
				<div><h5>YouTube Videos</h5></div>
				<Row>
					<Col>
						<Thumbnail source="W3 Schools" desc="Machine Learning is making the computer learn from studying data and statistics." url = "https://www.w3schools.com/python/python_ml_getting_started.asp" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Python.org" desc = "While The Python Language Reference describes the exact syntax and semantics of the Python language, this..." url="https://docs.python.org/3.9/library/index.html" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Eudureka" desc="This Edureka video on Advanced Python tutorial covers all the important aspects of using Python for..." url = "https://www.youtube.com/watch?v=O1gZc-erLjg" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Techbeamers" desc="This tutorial covers the following topic – Python Zip. It describes the syntax of the zip() function in Python. Also, it explains" url="https://www.techbeamers.com/python-tutorial-step-by-step/" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>YouTube Playlists</h5></div>
				<Row>
					<Col>
						<Thumbnail source="W3 Schools" desc="Machine Learning is making the computer learn from studying data and statistics." url = "https://www.w3schools.com/python/python_ml_getting_started.asp" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Python.org" desc = "While The Python Language Reference describes the exact syntax and semantics of the Python language, this..." url="https://docs.python.org/3.9/library/index.html" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Eudureka" desc="This Edureka video on Advanced Python tutorial covers all the important aspects of using Python for..." url = "https://www.youtube.com/watch?v=O1gZc-erLjg" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Techbeamers" desc="This tutorial covers the following topic – Python Zip. It describes the syntax of the zip() function in Python. Also, it explains" url="https://www.techbeamers.com/python-tutorial-step-by-step/" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					<Col>
						<Thumbnail source="W3 Schools" desc="Machine Learning is making the computer learn from studying data and statistics." url = "https://www.w3schools.com/python/python_ml_getting_started.asp" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Python.org" desc = "While The Python Language Reference describes the exact syntax and semantics of the Python language, this..." url="https://docs.python.org/3.9/library/index.html" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Eudureka" desc="This Edureka video on Advanced Python tutorial covers all the important aspects of using Python for..." url = "https://www.youtube.com/watch?v=O1gZc-erLjg" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Techbeamers" desc="This tutorial covers the following topic – Python Zip. It describes the syntax of the zip() function in Python. Also, it explains" url="https://www.techbeamers.com/python-tutorial-step-by-step/" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					<Col>
						<Thumbnail source="W3 Schools" desc="Machine Learning is making the computer learn from studying data and statistics." url = "https://www.w3schools.com/python/python_ml_getting_started.asp" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Python.org" desc = "While The Python Language Reference describes the exact syntax and semantics of the Python language, this..." url="https://docs.python.org/3.9/library/index.html" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Eudureka" desc="This Edureka video on Advanced Python tutorial covers all the important aspects of using Python for..." url = "https://www.youtube.com/watch?v=O1gZc-erLjg" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail source="Techbeamers" desc="This tutorial covers the following topic – Python Zip. It describes the syntax of the zip() function in Python. Also, it explains" url="https://www.techbeamers.com/python-tutorial-step-by-step/" style={{backgroundColor:"rgba(255,56,0,0.3)"}}/>
					</Col>
				</Row>
			</Container>
			<div className="bottom-nav">
    				<h6>Hi, are you a</h6> 
    				<Link to="/questionnaire" className="links"> <Button className="buttons" size = "small" style={{backgroundColor:"#5bc0de"}}>Student</Button> </Link>
    					&nbsp; or a &nbsp;
    				<Link to="/login" className="links"> <Button className="buttons" size = "small" style={{backgroundColor:"#5bc0de"}}> Python Expert</Button></Link>
    		</div>
    		</Container>
		);
	}
}