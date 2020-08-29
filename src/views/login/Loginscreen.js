import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
class Loginscreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginpage:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet?";
    this.setState({
                  loginpage:loginscreen,
                  loginmessage:loginmessage
                    })
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginpage}
        <div style={{paddingTop:"20px"}}>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div style={{paddingTop:"20px"}}>
            <a  href="#" onClick={(event) => this.handleClick(event)}>
              {this.state.buttonLabel}
            </a>
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
      loginmessage = "Already registered?";
      this.setState({
                     loginpage:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
      var loginscreen=[];
      loginscreen.push(<Login parentContext={this}/>);
      loginmessage = "Not Registered yet?";
      this.setState({
                     loginpage:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Register",
                     isLogin:true
                   })
    }
  }
}
export default Loginscreen;
