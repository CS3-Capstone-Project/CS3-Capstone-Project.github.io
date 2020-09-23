import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

//React Bootstrap API
import {Container} from 'reactstrap';
import {Row} from 'reactstrap';
import {Col} from 'reactstrap';
import {Image} from 'react-bootstrap';


//Styles
import "./levels.scss";

//Material UI API
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Components
import Thumbnail from "../../components/thumbnail/Thumbnail.js";

export default class Intermediate extends Component{
	render(){
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
			<div style={{display:"flex"}}> <Link to="/questionnaire"><ArrowBackIcon style={{marginTop:"35px", marginLeft:"10px"}}/></Link> <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/> {/*<h1 style={{ marginLeft:"40%"}}>Beginner</h1>*/}</div>
				<hr/>
				<div style={{textAlign:"center"}}><div ><h3>Intermediate</h3></div></div>
			<Container className="wrapper">
				<div><h5>YouTube Videos</h5></div>
				<Row>
					<Col>
						<Thumbnail id = "001" source="Corery Schafer" desc="Introduction - Intermediate Python Programming p. 1" url="https://www.youtube.com/watch?v=0VdzZQdaZ28" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "002" desc="A RegEx, regular Expression, is a sequence of characters that..." source = "W3 Schools" url = "https://www.w3schools.com/python/python_regex.asp" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "003" source = "GeeksForGeeks" desc="Containers are objects that hold objects. They provide a way to access the contained objects and iterate over them" url="https://www.geeksforgeeks.org/counters-in-python-set-1/?ref=lbp" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "004" source = "Python.org" desc="Another useful data type built into Python is the dictionary" url="https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>YouTube Playlists</h5></div>
				<Row>
					<Col>
						<Thumbnail id = "005" source="Corery Schafer" desc="Introduction - Intermediate Python Programming p. 1" url="https://www.youtube.com/watch?v=0VdzZQdaZ28" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "006" desc="A RegEx, regular Expression, is a sequence of characters that..." source = "W3 Schools" url = "https://www.w3schools.com/python/python_regex.asp" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "007" source = "GeeksForGeeks" desc="Containers are objects that hold objects. They provide a way to access the contained objects and iterate over them" url="https://www.geeksforgeeks.org/counters-in-python-set-1/?ref=lbp" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "008" source = "Python.org" desc="Another useful data type built into Python is the dictionary" url="https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					<Col>
						<Thumbnail id = "009" source="Corery Schafer" desc="Introduction - Intermediate Python Programming p. 1" url="https://www.youtube.com/watch?v=0VdzZQdaZ28" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "010" desc="A RegEx, regular Expression, is a sequence of characters that..." source = "W3 Schools" url = "https://www.w3schools.com/python/python_regex.asp" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "011" source = "GeeksForGeeks" desc="Containers are objects that hold objects. They provide a way to access the contained objects and iterate over them" url="https://www.geeksforgeeks.org/counters-in-python-set-1/?ref=lbp" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "012" source = "Python.org" desc="Another useful data type built into Python is the dictionary" url="https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					<Col>
						<Thumbnail id = "013" source="Corery Schafer" desc="Introduction - Intermediate Python Programming p. 1" url="https://www.youtube.com/watch?v=0VdzZQdaZ28" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "014" desc="A RegEx, regular Expression, is a sequence of characters that..." source = "W3 Schools" url = "https://www.w3schools.com/python/python_regex.asp" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "015" source = "GeeksForGeeks" desc="Containers are objects that hold objects. They provide a way to access the contained objects and iterate over them" url="https://www.geeksforgeeks.org/counters-in-python-set-1/?ref=lbp" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id = "016" source = "Python.org" desc="Another useful data type built into Python is the dictionary" url="https://docs.python.org/3.8/tutorial/datastructures.html#dictionaries" style={{backgroundColor:"rgba(255,159,0,0.3)"}}/>
					</Col>
				</Row>
			</Container>
			{/*
			<div className="bottom-nav">
    				<h6>Hi, are you a</h6>
    				<Link to="/questionnaire" className="links"> <Button className="buttons" size = "small" style={{backgroundColor:"#5bc0de"}}>Student</Button> </Link>
    					&nbsp; or a &nbsp;
    				<Link to="/login" className="links"> <Button className="buttons" size = "small" style={{backgroundColor:"#5bc0de"}}> Python Expert</Button></Link>
    		</div>*/}
    		</Container>
		);
	}
}
