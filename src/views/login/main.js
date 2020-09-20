<<<<<<< HEAD
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './main.css';
import { NavLink } from 'react-router-dom'
import Loginscreen from './Loginscreen'
class Main extends React.Component {
=======
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import './main.css';
import { NavLink } from 'react-router-dom'
import Loginscreen from './Loginscreen'
class App extends Component {
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
<<<<<<< HEAD
      <div style={{backgroundColor:"#f5f5f5"}} className="Main">
=======
      <div className="App">
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
const style = {
  margin: 15,
};
<<<<<<< HEAD
export default Main;
=======
export default App;
>>>>>>> 4dc49e7192960bc0a6de69c16ba5304f17efeb23
