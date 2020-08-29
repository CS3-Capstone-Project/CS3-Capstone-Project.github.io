import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

//React Bootstrap API
import {Container} from 'reactstrap';
import {Row,Image} from 'reactstrap';
import {Col} from 'reactstrap';

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
			<div> <Link to="/"><ArrowBackIcon style={{marginTop:"3px", marginLeft:"10px"}}/></Link> <h1>Beginner</h1></div>
				<hr/>
			<Container className="wrapper">
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
