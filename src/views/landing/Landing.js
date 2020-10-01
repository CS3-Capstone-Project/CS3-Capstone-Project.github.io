import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

//React Bootstrap API
//import Container from 'react-bootstrap/Container';
import {Image} from 'react-bootstrap';
//import Row from 'react-bootstrap/Row';
import {Col,Container,Row, Jumbotron} from 'reactstrap';

//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Button from 'react-bootstrap/Button';

//Material UI API
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

//Styles
import "./Landing.scss";

//Components
import Thumbnail from "../../components/thumbnail/Thumbnail.js";
import SearchBar from "../../components/SearchBar.js";

//Views
//import questionnaire from "../questionnaire/questionnaire.js";
import firebase from "../login/config/fire.js";
import login from "../login/Login";
export default class Landing extends Component{
	constructor(props){
    super(props);
    this.state={
    userid:"not set yet"
    }

   }

	 getUserData(){
		 firebase.auth().onAuthStateChanged(user => {
				 if (user) {
						 firebase.database().ref('User/' + user.uid).once("value", snap => {
							 this.setState({userid:user.uid});
						 })
				 }
				 else {
				 	this.setState({userid:"unknown"});
				 }
		 })

	 }
	render(){
		var user = firebase.auth().currentUser;
		return(
			<Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
				<div style={{textAlign:"center"}}><div ><Image className="logo" src="./img/python.png"/></div></div>
				<hr/>
			<Container className="wrapper">
			 	<Jumbotron>
					<span>"hello "{this.getUserData()}{this.state.userid}</span>
			 		<h3 style={{textDecoration:"none"}}>Python Description</h3>
			 		<hr/>
			 		<p>
			 			Python is an interpreted, high-level, general-purpose programming language.
			 			Created by Guido van Rossum and first released in 1991, Python's design
			 			philosophy emphasizes code readability with its notable use of significant whitespace.
			 			Its language constructs and object-oriented approach aim to help programmers write clear,
			 			logical code for small and large-scale projects.
			 		</p>
			 		<a style={{textDecoration:"none"}} href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank"><Button className="buttons" size = "small" style={{backgroundColor:"#5bc0de"}}>More about Python</Button></a>
			 	</Jumbotron>

			 	<div style={{textAlign:"center", backgroundColor:"", paddingLeft:"36%", paddingBottom:"10px"}}>
			 		<SearchBar/>
			 	</div>

				<div><h3>Beginner</h3></div>
				<div><h5>YouTube Videos</h5></div>
				<Row>
					<Col>
						<Thumbnail id="1" source="freeCodeCamp.org" desc = "This course will give you a full introduction into all of the core concepts in python. Follow along with the video..." url="https://www.youtube.com/watch?v=rfscVS0vtbw" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="2" source="Hitesh Choudhary" desc= "Python is a great programming language and if you have decided that you will learn python in 2019, that's..." url="https://www.youtube.com/watch?v=7UeRnuGo-pg" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="3" source="CS Dojo" desc="Python Tutorial for Absolute Beginners #1 - What Are Variables?" url="https://www.youtube.com/watch?v=Z1Yd7upQsXY" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="4" source="Edureka" desc="Python Tutorial for Beginners | Python Programming Language Tutorial | Python Training | Edureka" url="https://www.youtube.com/watch?v=N0lxfilGfak" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>YouTube Playlists</h5></div>
				<Row>
					<Col>
						<Thumbnail id="5" source="freeCodeCamp.org" desc = "This course will give you a full introduction into all of the core concepts in python. Follow along with the video..." url="https://www.youtube.com/watch?v=rfscVS0vtbw" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="6" source="Hitesh Choudhary" desc= "Python is a great programming language and if you have decided that you will learn python in 2019, that's..." url="https://www.youtube.com/watch?v=7UeRnuGo-pg" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="7" source="CS Dojo" desc="Python Tutorial for Absolute Beginners #1 - What Are Variables?" url="https://www.youtube.com/watch?v=Z1Yd7upQsXY" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="8" source="Edureka" desc="Python Tutorial for Beginners | Python Programming Language Tutorial | Python Training | Edureka" url="https://www.youtube.com/watch?v=N0lxfilGfak" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>Webpages</h5></div>
				<Row>
					<Col>
						<Thumbnail id="9" source="freeCodeCamp.org" desc = "This course will give you a full introduction into all of the core concepts in python. Follow along with the video..." url="https://www.youtube.com/watch?v=rfscVS0vtbw" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="10" source="Hitesh Choudhary" desc= "Python is a great programming language and if you have decided that you will learn python in 2019, that's..." url="https://www.youtube.com/watch?v=7UeRnuGo-pg" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="11" source="CS Dojo" desc="Python Tutorial for Absolute Beginners #1 - What Are Variables?" url="https://www.youtube.com/watch?v=Z1Yd7upQsXY" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="12" source="Edureka" desc="Python Tutorial for Beginners | Python Programming Language Tutorial | Python Training | Edureka" url="https://www.youtube.com/watch?v=N0lxfilGfak" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
				</Row>

				<div><h5>eBooks</h5></div>
				<Row>
					<Col>
						<Thumbnail id="13" source="freeCodeCamp.org" desc = "This course will give you a full introduction into all of the core concepts in python. Follow along with the video..." url="https://www.youtube.com/watch?v=rfscVS0vtbw" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="14" source="Hitesh Choudhary" desc= "Python is a great programming language and if you have decided that you will learn python in 2019, that's..." url="https://www.youtube.com/watch?v=7UeRnuGo-pg" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="15" source="CS Dojo" desc="Python Tutorial for Absolute Beginners #1 - What Are Variables?" url="https://www.youtube.com/watch?v=Z1Yd7upQsXY" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
					<Col>
						<Thumbnail id="16" source="Edureka" desc="Python Tutorial for Beginners | Python Programming Language Tutorial | Python Training | Edureka" url="https://www.youtube.com/watch?v=N0lxfilGfak" style={{backgroundColor:"rgba(34,139,34,0.3)"}}/>
					</Col>
				</Row>
				<div style={{textAlign:"center"}}>
					<Link to="beginner" className="links"><Button size = "small" className="buttons" style={{backgroundColor:"#5bc0de"}}> More </Button></Link>
				</div>
				<hr/>

				<div><h3>Intermediate</h3></div>
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
				<div style={{textAlign:"center"}}>
					<Link to="intermediate" className="links"><Button size = "small" className="buttons" style={{backgroundColor:"#5bc0de"}}> More </Button></Link>
				</div>
				<hr/>
				<div><h3>Advanced</h3></div>
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
				<div style={{textAlign:"center"}}>
					<Link to="advanced" className="links"><Button size = "small" className="buttons" style={{backgroundColor:"#5bc0de"}}> More </Button></Link>
				</div>

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
