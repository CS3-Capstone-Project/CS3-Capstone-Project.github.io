<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
import React, { Component } from 'react';
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
<<<<<<< HEAD
class Loginscreen extends React.Component {
=======
class Loginscreen extends Component {
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
<<<<<<< HEAD
      loginpage:[],
=======
      loginscreen:[],
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
<<<<<<< HEAD
    var loginmessage = "Not registered yet?";
    this.setState({
                  loginpage:loginscreen,
=======
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
                  loginmessage:loginmessage
                    })
  }
  render() {
    return (
<<<<<<< HEAD
      <div style={{backgroundColor:"#f5f5f5"}} className="loginscreen">
        {this.state.loginpage}
        <div style={{paddingTop:"20px", paddingBottom:"20px"}}>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div style={{paddingTop:"20px", paddingBottom:"20px"}}>
            <a  href="#" onClick={(event) => this.handleClick(event)}>
              {this.state.buttonLabel}
            </a>
=======
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
  handleClick(event){
    // console.log("event",event);
    var loginmessage;
    if(this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(<Register parentContext={this}/>);
<<<<<<< HEAD
      loginmessage = "Already registered?";
      this.setState({
                     loginpage:loginscreen,
=======
      loginmessage = "Already registered.Go to Login";
      this.setState({
                     loginscreen:loginscreen,
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
      var loginscreen=[];
      loginscreen.push(<Login parentContext={this}/>);
<<<<<<< HEAD
      loginmessage = "Not Registered yet?";
      this.setState({
                     loginpage:loginscreen,
=======
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     loginscreen:loginscreen,
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
                     loginmessage:loginmessage,
                     buttonLabel:"Register",
                     isLogin:true
                   })
    }
  }
}
<<<<<<< HEAD
export default Loginscreen;
=======

const style = {
  margin: 15,
};
export default Loginscreen;
=======
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
  handleClick(event){
    // console.log("event",event);
    var loginmessage;
    if(this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(<Register parentContext={this}/>);
      loginmessage = "Already registered.Go to Login";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
      var loginscreen=[];
      loginscreen.push(<Login parentContext={this}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Register",
                     isLogin:true
                   })
    }
  }
}

const style = {
  margin: 15,
};
export default Loginscreen;
>>>>>>> a9e12b589d3f68f50d98d0663f9917ec54cd4df9
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
