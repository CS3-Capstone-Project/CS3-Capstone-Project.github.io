import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import { NavLink } from 'react-router-dom'
import Loginscreen from './Loginscreen'
class Main extends React.Component {
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
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Main;
