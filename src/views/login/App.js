import React,{useState} from 'react';
import logo from "../../logo.svg";
import "./App.css";
import "./Login.css"
import "./App.css"
import {Login} from "./Login";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedInActive:true,
    }
  }
  changeState(){
    const {isLoggedInActive}=this.state;
    if(isLoggedInActive){
      this.RightSide.classList.remove("right");
      this.RightSide.classList.remove("left");
    }
    else {
      this.RightSide.classList.remove("left");
      this.RightSide.classList.remove("right");
    }
    this.setState((prevState)=>({isLoggedInActive: !prevState.isLoggedInActive}));
  }
  render(){
    const {isLoggedInActive} = this.state;
    const current = isLoggedInActive ? "Register":"Login";
    const currentActive = isLoggedInActive ? "Login":"Register";
    return(
      <div className="App">
        <div className="login">
          <div className="container">
            {isLoggedInActive && <Login containerRef={(ref)=>this.current=ref}/>}
            {!isLoggedInActive && <Register containerRef={(ref)=>this.current=ref}/>}
          </div>
          <RightSide current={current} containerRef={ref => this.RightSide = ref} onClick={this.changeState.bind(this)}/>
        </div>
      </div>
    );
  }
}
const RightSide = props=>{
  return(
    <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">
        </div>
      </div>
    </div>
  );
}
export default App
