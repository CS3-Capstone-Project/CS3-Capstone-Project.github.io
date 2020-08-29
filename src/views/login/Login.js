import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton,AppBar,TextField} from 'material-ui';
import loginImg from "./Login.svg";
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router-dom';
class Login extends React.Component {

  constructor(props){
    super(props);
    this.state={
    username:'',
    password:''
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
                <RaisedButton label="Login" primary={true} style={{margin: "15",}}/>
               </Link>
           </div>
           </MuiThemeProvider>
        </div>
      );
    }
}
export default Login;
