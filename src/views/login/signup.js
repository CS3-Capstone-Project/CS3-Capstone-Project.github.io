//React stuff
import React from "react";

//material ui API
import {Button,TextField, 
        Radio,FormLabel, 
        FormControl, 
        RadioGroup, 
        FormControlLabel
        } from '@material-ui/core';
import IconButton from 'material-ui/IconButton';

import Modal from 'react-awesome-modal';

import loginImg from "./Login.svg";

import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Image} from 'react-bootstrap';
import Fire from "./config/fire";

//Styles
import './style.css';

//reactstrap API
import {Col,Container,Row} from 'reactstrap';

export default class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      firstname:"",
      lastname:"",
      userType:"",
      level:"Beginner",
      description:"",
      ratedResources:{},
      myResources:{},
      visible:false
    }

    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.openModal=this.openModal.bind(this);
    this.closeModal=this.closeModal.bind(this);

   }

   //Update state when one or more of the Textfields are changed 
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }

   //Ask user for description only if they are not adding ebooks
  descrip(){
    if(this.state.userType == "expert"){
      return <div>
        <TextField 
          placeholder="Brief description of your job and/or qualifications"
          multiline="true"
          variant="outlined"
          rows="4"
          required="true"
          name="description"
          onChange={this.handleChange}
          fullWidth="true"/> <br/> <br/> </div>
    }
    else{ return;}
  }

  /*Create user in the database, returns an error if email has an account, 
  the email is invalid or the password is weak*/
  signup(e){
    e.preventDefault();
    Fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => { 
      //bundle user data to this if they are a student
      if(this.state.userType === "student"){
        Fire.database().ref("User/"+Fire.auth().currentUser.uid).set({
          firstname:this.state.firstname,
          email:this.state.email,
          password:this.state.password,
          level: this.state.level,
          userType: this.state.userType,
          ratedResources:this.state.ratedResources,
        });

        //Sign in the user that just signed up
        Fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
          .then((u)=>{

            //Get logged in user data
            let user = Fire.auth().currentUser;
            if(user){
              Fire.database().ref('User/' + user.uid).once("value", snap => {
                this.props.handleUser(snap.val().firstname);
                this.openModal();
                //window.location.replace('/');
            })
          }

        })

      }

      //if it's a Python expert bundle it to this
      else if(this.state.userType === "expert"){
        Fire.database().ref("User/"+Fire.auth().currentUser.uid).set({
          firstname:this.state.firstname,
          email:this.state.email,
          password:this.state.password,
          userType: this.state.userType,
          description: this.state.description,
          ratedResources: this.state.ratedResources,
          myResources: this.state.myResources,
        });

        //Sign in the user that just signed up
        Fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
          .then((u)=>{

            //Get logged in user data
            let user = Fire.auth().currentUser;
            if(user){
              Fire.database().ref('User/' + user.uid).once("value", snap => {
                this.props.handleUser(snap.val().firstname);
                alert("Welcome " + snap.val().firstname + ", you are now signed in.");
                window.location.replace('/');
            })
          }

        })
      }
    })

      //Catch errors and display appropriate error message
      .catch((error)=> {
        let errorCode = error.code;
        let errorMessage = error.message;

        if(errorCode === 'auth/email-already-in-use'){
          alert("This email has an account, Sign in.");
        }
        else if(errorCode === 'auth/invalid-email'){
          alert("Oops, looks like this email is invalid.");
        }
        else if(errorCode === 'auth/weak-password'){
          alert("Password not strong enough.");
        }
        else{
          alert(errorMessage);
        }
      }); 
  }

  //Opens the modal welcoming new student users.
   openModal(){
        this.setState({
            visible : true
        });
    }
    //Closes the modal welcoming new student users.
    closeModal(){
        this.setState({
            visible : false
        });
    }

  //Display the sign up page
  render(){
      return(
        <Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
            
            <Container style={{paddingTop:"78px"}}>
            <div style={{textAlign:"center"}}>
              <img style={{width:"350px",margin:"10px"}} src={loginImg}/>
            </div>
            <br/>
            <div style={{textAlign:"center"}}><div ><h1 style={{textDecoration:"none",fontFamily:"Courier New"}}>Sign Up</h1></div></div>

            <hr/>
            <form onSubmit={(event) => this.signup(event)}>

                <FormControl size="medium" component="fieldset" required="true" fullWidth="true">
                  <FormLabel required="true" component="legend">Hi, are you </FormLabel>
                  <RadioGroup row aria-label="position" required="true" name="userType" value={this.state.userType} onChange={this.handleChange}>
                    <FormControlLabel
                      value="student"
                      control={<Radio required="true" color="primary" />}
                      label="a Student"
                      labelPlacement="start"
                    />

                    <FormControlLabel
                      value="expert"
                      control={<Radio color="primary" />}
                      label="or a Python Expert"
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </FormControl>

                <br/>
                <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth="true"
                    required="true"
                    size="medium"
                    name="firstname"
                    onChange={this.handleChange}
                />
                <br/><br/>

                {/*<TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth="true"
                    required="true"
                    size="medium"
                    name="lastname"
                    onChange={this.handleChange}
                />
                <br/><br/>*/}

                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth="true"
                    required="true"
                    size="medium"
                    name="email"
                    onChange={this.handleChange}
                />
                <br/><br/>
                
                <TextField
                    type="password"
                    label="Password"
                    fullWidth="true"
                    variant="outlined"
                    color="primary"
                    required = "true"
                    size="medium"
                    name="password"
                    onChange={this.handleChange}
                />
                <br/><br/>

                {this.descrip()}
                
                <Button 
                  fullWidth="true"
                  size = "small" 
                  className="buttons" 
                  type="submit"
                  value="Submit"
                  variant="contained"
                style={{backgroundColor:"#5bc0de",textTransform:"none", fontSize:"medium"}}
              > 
                  Sign up
              </Button>
            </form>

            {/*<div style={{textAlign:"center", marginTop:"10px"}}>
              <p>or</p>
              <Button 
                  variant="contained"
                  size = "medium" 
                  className="buttons" 
                style={{backgroundColor:"#FF6666", textTransform:"none", fontSize:"medium"}}
              > 
                  Sign up with Google
              </Button>
              &nbsp; 
              <Button 
                  variant="contained"
                  size = "medium" 
                  className="buttons" 
                style={{backgroundColor:"#0080FF", textTransform:"none", fontSize:"medium"}}
              > 
                  Sign up with Facebook
              </Button>
            </div>*/}

            <div style={{textAlign:"center", cursor:"default", marginTop:"5px"}}>
              <p>Already have an account? <Link className="loginLinks" to="/signin">Sign In </Link> </p>
            </div>
            </Container>
            <Modal visible={this.state.visible} width="400" height="330" effect= "fadeInUp" onClickAway={() => this.closeModal()}>
              <Container  >
                <div>
                  <Container style={{backgroundColor:"#D1EEDE"}}>
                  <p style={{fontSize:"26px", fontWeight:"bold"}}>Welcome {this.state.firstname}</p>
                  </Container>
                  <hr/>
                </div>
                <div>
                <Container style={{backgroundColor:"#E6E9ED"}}>
                  <li>Now you can rate resources after you have viewed them.</li>
                  <li>You can check your understanding of python concepts based on their level of difficulty.</li>
                  <li>You can monitor your progress.</li>
                </Container>
                <hr/>
                </div>
                <div><p style={{fontSize:"20px", fontWeight:"bold"}}>Enjoy</p></div>
              </Container>
              <div><Link to="/questionnaire"><Button className="btn btn-primary float-center"style={{backgroundColor:"#5bc0de"}}>continue</Button></Link></div>
            </Modal>
        </Container>
      );
    }
}