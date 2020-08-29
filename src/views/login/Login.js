import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from "react";
import loginImg from "./Login.svg";
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router-dom';
class Login extends React.Component {

constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
             showMenuIconButton={false}
             style={{ background: 'linear-gradient(to right,#2E3B55,#ffe873,#ffd43b,#646464)' }}
           />
           <div >
   					<img style={{width:"21em",margin:"10px"}} src={loginImg}/>
   				 </div>
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Link to="/">
              <RaisedButton label="Login" primary={true} style={style}/>
             </Link>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
  handleClick(event){
   var apiBaseUrl = "/";
   var self = this;
   var payload={
     "email":this.state.username,
     "password":this.state.password
   }
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
       console.log("Login successfull");
       var uploadScreen=[];
       uploadScreen.push(<uploadScreen appContext={self.props.appContext}/>)
       self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
     }
     else if(response.data.code == 204){
       console.log("Username password do not match");
       alert("username password do not match")
     }
     else{
       console.log("Username does not exists");
       alert("Username does not exist");
     }
   })
   .catch(function (error) {
   console.log(error);
   });
  }
}
const style = {
 margin: 15,
};
export default Login;
