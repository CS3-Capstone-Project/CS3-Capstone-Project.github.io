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
import NotFound from "./NotFound.js";

//Styles
import "./App.scss";

//Firebase
import fire from "./login/config/fire.js";

//Material UI API
import Button from '@material-ui/core/Button';

export default function App(){

    //User details
    const [user, setUser] = useState(null)
    const [userType, setUserType] = useState(null)
    const [userLevel, setUserLevel] = useState(null)
    const [userDescription, setUserD] = useState(null)
    const [userRated, setUserRat] = useState(null)
    const [userResourses, setUserRes] = useState(null)
    const [userEmail, setUserE] = useState(null)
    const [userId, setUserId] = useState(null)

    //Take user details and call setUser to update them
    const handleUser = (userDetails) => {
      setUser(userDetails);
    }  

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

          setUserId(u.uid);
        }
      });
    });  

    return (
    	<Router>

        <Header 
          user={user} 
          userType={userType} 
          handleUser={handleUser}
        />

    		<Switch>
    			<Route 
          exact 
          path={"/"}
    			render = {props =>(
            <Landing userId={userId} user={user} { ...props} />
          )}>
    			</Route>

    			<Route 
          path={"/questionnaire"}
          render = {props =>(
          <Questionnaire userId={userId} user={user} userLevel={userLevel} { ...props} />
          )}>
   				</Route>

          <Route 
          path={"/profile"}
          render = {props =>(
          <ProfilePage 
            userId={userId} 
            user={user} 
            userType={userType}
            userLevel={userLevel} 
            userEmail = {userEmail} 
            description={userDescription} 
            { ...props} />
          )}>
          </Route>

          <Route 
          path={"/ebooks"}
          render = {props =>(
          <Ebooks userId={userId} user={user} { ...props} />
          )}>
          </Route>

          <Route 
          path={"/addresource"}
          render = {props =>(
          <Addresource userId={userId} user={user} { ...props} />
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
            <Beginner userId={userId} user={user} { ...props} />
          )}>
   				</Route>

   				<Route path={"/intermediate"}
            render = {props =>(
            <Intermediate userId={userId} user={user} { ...props} />
          )}>
   				</Route>

   				<Route path={"/advanced"}
            render = {props =>(
            <Advanced userId={userId} user={user} { ...props} />
          )}>
   				</Route>
          <Route path={"*"}
            render = {props =>(
            <NotFound userId={userId} user={user} { ...props} />
          )}>
          </Route>
   			</Switch>
    	</Router>
    );
}
