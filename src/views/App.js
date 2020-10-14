//React stuff
import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Components
import Questionnaire from "./questionnaire/questionnaire.js";
import SignIn from "./login/signin.js";
import SignUp from "./login/signup.js";
import ForgotPassword from "./login/forgotpassword.js";
import Landing from "./landing/Landing.js";
import Beginner from "./levels/Beginner.js";
import Intermediate from "./levels/Intermediate.js";
import Advanced from "./levels/Advanced.js";
import Addresource from "./addresource/Addresource.js";
import Ebooks from "./ebooks/Ebooks.js";
import ProfilePage from "./login/ProfilePage.js";
import Header from "../components/header/Header.js";
import LevelQuiz from "./questionnaire/LevelQuiz.js";
import PycatTest from "./questionnaire/PycatTest.js";


//Styles
import "./App.scss";

//Firebase
import fire from "./config/fire.js";

//Material UI API
import Button from '@material-ui/core/Button';


export default function App(){
    //Update the value of user
    const [user, setUser] = useState(null)
    const [userType, setUserType] = useState(null)
    const [userLevel, setUserLevel] = useState(null)
    const [userDescription, setUserD] = useState(null)
    const [userRated, setUserRat] = useState(null)
    const [userResourses, setUserRes] = useState(null)
    const [userEmail, setUserE] = useState(null)

    //Take user details and call setUser to update them
    const handleUser = (userDetails) => {
      setUser(userDetails);
    }  

    const [userObject, setUserObject] = useState([0])

    //ensure that login status persists after refreshing page
    useEffect(() => {
      fire.auth().onAuthStateChanged((u)=>{
        if(u){
          const userRef =fire.database().ref('User/'+u.uid); 
          userRef.on('value', (userData) => {
            setUserD(userData.val().description);
            setUserLevel(userData.val().level);
            setUserType(userData.val().userType);
            setUser(userData.val().firstname);
            setUserE(userData.val().email);
          });
        }
      });
    });  

    return (
      <Router>

        <Header 
          user={user} 
          userType={userType} 
          userObject={userObject} 
          handleUser={handleUser}
        />

        <Switch>
          <Route 
          exact 
          path={"/"}
          render = {props =>(
            <Landing user={user} { ...props} />
          )}>
          </Route>

          <Route 
          path={"/questionnaire"}
          render = {props =>(
          <Questionnaire user={user} userLevel={userLevel} { ...props} />
          )}>
          </Route>

          <Route 
          path={"/profilepage"}
          render = {props =>(
          <ProfilePage 
            user={user} 
            userEmail={userEmail} 
            userLevel={userLevel}
            userType={userType} 
            description={userDescription} 
            userRated={userRated}
            userResourses={userResourses}
            { ...props} 
          />
          )}>
          </Route>

          <Route 
          path={"/ebooks"}
          render = {props =>(
          <Ebooks { ...props} />
          )}>
          </Route>

          <Route 
          path={"/addresource"}
          render = {props =>(
          <Addresource user={user} { ...props} />
          )}>
          </Route>

          <Route path={"/signin"}
            render = {props =>(
            <SignIn { ...props} user={user}  handleUser={handleUser} />
          )}>
          </Route>

          <Route path={"/signup"}
            render = {props =>(
            <SignUp { ...props} handleUser={handleUser} />
          )}>
          </Route>

          <Route path={"/forgotpassword"}
            render = {props =>(
            <ForgotPassword { ...props} />
          )}>
          </Route>

          <Route path={"/beginner"}
            render = {props =>(
            <Beginner { ...props} />
          )}>
          </Route>

          <Route path={"/intermediate"}
            render = {props =>(
            <Intermediate { ...props} />
          )}>
          </Route>

          <Route path={"/advanced"}
            render = {props =>(
            <Advanced { ...props} />
          )}>
          </Route>
          <Route 
          path={"/LevelQuiz"}
          render = {props =>(
          <LevelQuiz user={user} { ...props} />
          )}>
          </Route>
          <Route 
          path={"/PycatTest"}
          render = {props =>(
          <PycatTest
             user={user} { ...props} 
             userLevel= {userLevel} {...props}
            />
          )}>
          </Route>
        </Switch>
      </Router>
    );
}
