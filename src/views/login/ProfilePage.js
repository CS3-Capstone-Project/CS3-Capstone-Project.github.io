//React stuff
import React, {Component} from "react";
import {Link} from 'react-router-dom';

//Material ui API
import {Button,TextField} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//Typing lady image
import loginImg from "./Login.svg";

//React bootstrap API
import {Image} from 'react-bootstrap';

//Firebase
import fire from "./config/fire";

//Components
import Thumbnail from "../../components/thumbnail/Thumbnail.js";

//Styles
import './style.css';

//list of possible resources and their description
import { commonSearchs } from "../resources/commonsearchs.js";

//reactstrap API
import {Col,Container,Row} from 'reactstrap';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
      this.state={
        videos:[],
        webpages:[],
        ebooks:[],
        testState:""
        
      }
  }

  //Monitor if the DOM got updated and update user resources if it is
  componentDidUpdate(prevProps, prevState){
    if(prevProps.userId !== this.props.userId){
      const id = this.props.userId;
      //console.log("User Id: " + this.props.userId);
      const userRef = fire.database().ref('User/' + id + '/myResources/');
      const beginnerRef = fire.database().ref('resource/beginner/');
      const advancedRef = fire.database().ref('resource/advanced');
      const intermediateRef = fire.database().ref('resource/intermediate');

      const ebooksRef = fire.database().ref('ebooks');
  
      userRef.on('value',(snapshot)=>{
        let temp = [];
        snapshot.forEach((resType)=>{
          //load ebooks that the user added to the system
          if(resType.key == 'ebooks'){
            
            resType.forEach((book)=>{
              ebooksRef.on('value',(snap)=>{
                snap.forEach((ebook)=>{
                  if(book.key == ebook.key){
                    let vids = ebook.val();
                
                    temp.push({
                        resPath: ebook.ref.path.toString(),
                        source: vids.source,
                        url: vids.url, 
                        topic: vids.topic,
                        description: vids.description.slice(0,250),
                        rating: vids.rating,
                        totalRatings: vids.totalRatings
                    });
                  }
                });
              this.setState({ebooks:temp});
              });

            });
          this.setState({ebooks:temp});
          //load webpages that the user added to the system
          }else if(resType.key == 'webpages'){
            let temp = [];
            resType.forEach((webpage)=>{
              temp.push({
                resPath: webpage.ref.path.toString(),
                source: webpage.val().source,
                url: webpage.val().url, 
                topic: webpage.val().topic,
                description: (commonSearchs.find( ({ topic }) => topic == webpage.val().topic)).description,
                rating: webpage.val().rating,
                totalRatings: webpage.val().totalRatings
              });


            });
            this.setState({webpages:temp});
          //load videos that the user added to the system
          }else{
            let temp = [];
            resType.forEach((vid)=>{
              temp.push({
                resPath: vid.ref.path.toString(),
                source: vid.val().source,
                url: vid.val().url, 
                topic: vid.val().topic,
                description: (commonSearchs.find( ({ topic }) => topic == vid.val().topic)).description,
                rating: vid.val().rating,
                totalRatings: vid.val().totalRatings
              });

            });
            this.setState({videos:temp});
          }
        });
      });
    }
  }

  //Display the Profile page
  render(){
    return (
      <Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
        <Container style={{paddingTop:"85px",fontFamily:"Courier New"}}>
          <div><h2 style={{textDecorationColor: "black",textDecoration:"underline"}}>Profile</h2></div>
          <div>Name : {this.props.user}</div>
          <div>Email Address: {this.props.userEmail}</div>
          { this.props.userType == 'student' ?
            <div style={{paddingBottom:"50px"}}>
            <div>Career : Student</div>
            <div>Level: {this.props.userLevel}</div>
            <hr/>
            <div style={{paddingTop:"10px", boxShadow:"0px 10px 5px 5px #888888"}}>
                <iframe src="https://trinket.io/embed/python/edd948bf08" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            </div>
            </div>
            :
            <div>
            <div>Description: {this.props.description}</div>
            <div>Career : Python Expert</div>
            <div><h2 style={{paddingTop:"20px",textDecorationColor: "black",textDecoration:"underline"}}>My reasources</h2></div>
            <p style={{fontSize:"small",color:"red",fontFamily:"Sans serif"}}>*refresh page to load your resources</p>
            <div><h4 style={{paddingTop:"5px",textDecoration:"none"}}>eBooks</h4></div>
            <Row style={{fontFamily:"Sans serif"}}>
              {
                this.state.ebooks.map((data,key) => {
                  return(
                    <Col>
                      <Thumbnail 
                      key={data.id} 
                      id = {data.id} 
                      source = {data.source} 
                      topic = {data.topic}
                      desc = {data.description} 
                      url = {data.url} 
                      user={this.props.user}
                      path = {data.resPath}
                      userId = {this.props.userId}
                      rating = {data.rating}
                      style={{backgroundColor:"rgba(104, 46, 26,0.6)"}}> 
                      </Thumbnail>
                    </Col>
                  );
                })
              }
            </Row>

          
            <Row style={{fontFamily:"Sans serif"}}>
              {
                this.state.videos.map((data,key) => {
                  return(
                    <Col>
                      <Thumbnail 
                      key={data.id} 
                      id = {data.id} 
                      source = {data.source} 
                      topic = {data.topic}
                      desc = {data.description} 
                      url = {data.url} 
                      user={this.props.user}
                      path = {data.resPath}
                      userId = {this.props.userId}
                      rating = {data.rating}
                      style={{backgroundColor:"rgba(104, 46, 26,0.6)"}}> 
                      </Thumbnail>
                    </Col>
                  );
                })
              }
            </Row>

            <div><h4 style={{paddingTop:"20px",textDecoration:"none", paddingBottom:"10px"}}>Webpages</h4></div>
          
            <Row style={{fontFamily:"Sans serif"}}>
              {
                this.state.webpages.map((data,key) => {
                  return(
                    <Col>
                      <Thumbnail 
                      key={data.id} 
                      id = {data.id} 
                      source = {data.source} 
                      topic = {data.topic}
                      desc = {data.description} 
                      url = {data.url} 
                      user={this.props.user}
                      path = {data.resPath}
                      userId = {this.props.userId}
                      rating = {data.rating}
                      style={{backgroundColor:"rgba(104, 46, 26,0.6)"}}> 
                      </Thumbnail>
                    </Col>
                  );
                })
              }
            </Row>
            </div>
          }
        </Container>
      </Container>
    );
  }
}
export default ProfilePage;
