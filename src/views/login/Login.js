import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton,AppBar,TextField} from 'material-ui';
import loginImg from "./Login.svg";
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Image} from 'react-bootstrap';
import Fire from "./config/fire";

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state={
    username:'',
    password:'',
    userid:""
    }
   }

  render() {
      return (
        <div style={{backgroundColor:"#f5f5f5"}}>
          <MuiThemeProvider>
            <div>
            <div style={{display:"flex"}}> <Link to="/"><ArrowBackIcon style={{marginTop:"35px", marginLeft:"10px"}}/></Link> <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/> {/*<h1 style={{ marginLeft:"40%"}}>Beginner</h1>*/}</div>
          <hr/>
          <div style={{textAlign:"center"}}><div ><h3>Login</h3></div></div>
               <div >
       					<img style={{width:"21em",margin:"10px"}} src={loginImg}/>
       				 </div>
               <TextField
                 hintText="Enter your Username"
                 floatingLabelText="Username"
                 onChange = {(event,newValue) => this.setState({username:newValue})}
                 required/>
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   color="primary"
                   onChange = {(event,newValue) => this.setState({password:newValue})}
                   required = "true"
                   />
                 <br/>
                 <Link to="/">
                  <RaisedButton label="Login" primary={true} style={{marginTop: "15px",}} onClick={event =>this.login(event)}/>
                 </Link>
             </div>
           </MuiThemeProvider>
        </div>
      );
    }
    login(e){
      e.preventDefault();
      Fire.auth().signInWithEmailAndPassword(this.state.username,this.state.password).then((u)=>{

        var user = Fire.auth().currentUser;
        Fire.auth().onAuthStateChanged(user => {
          alert(user.FirstName);
            if (user) {
                this.getUserData(user.uid)
                this.setState({userid:user.uid})
            }
        })
      }).catch((error) =>{
        alert(error);
      });
      Fire.auth().onAuthStateChanged(user => {
          if (user) {
              this.getUserData(user.uid)
          }
      })
    }
    getUserData(uid) {
      Fire.database().ref('User/Student/' + uid).once("value", snap => {
          alert(snap.val().FirstName) // returns the name of the person logged in
      })
    }
}
export default Login;
