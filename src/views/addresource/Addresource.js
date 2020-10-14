import React from 'react';

//material ui API
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios';

//Firebase
import fire from "../login/config/fire.js";

//Components
import Header from "../../components/header/Header.js";

//reactstrap API
import {Col,Container,Row, Jumbotron} from 'reactstrap';
//import Fire from "./login/config/fire";

import { commonSearchs } from "../resources/commonsearchs.js";

class Addresource extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      source:"",
      url:"",
      topic: "",
      description:"",
      difficulty:"",
      type:"",
      rating:0,
      totalRatings:0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  //Update state when one or more of the Textfields are changed 
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  //Ask user for description only if they are not adding ebooks
  descrip(){
    if(this.state.type != "ebooks"){
      return <div>
        <TextField 
          placeholder="Brief description"
          multiline="true"
          variant="outlined"
          rows="3"
          required="true"
          name="description"
          onChange={this.handleChange}
          fullWidth="true"/> <br/> <br/> </div>
    }
    else{ return;}
  }

  //After the submit button is pressed push data to firebase
  handleSubmit(event){
    event.preventDefault();
    let resourcesRef;
    let resource;
    //if selected data is an ebook use this to create a resource object
    if(this.state.type == "ebooks"){
      resourcesRef = fire.database().ref('ebooks/');
      resource = {
        source: this.state.source,
        url: this.state.url,
        description: this.state.description,
        rating:this.state.rating,
        totalRatings:this.state.totalRatings
      }
    }
    //otherwise use this
    else{
      resourcesRef = fire.database().ref('resource/' + this.state.difficulty + "/" + this.state.type);
      resource = {
        source: this.state.source,
        url: this.state.url,
        topic: this.state.topic,
        description: this.state.description,
        rating:this.state.rating,
        totalRatings:this.state.totalRatings
      }
    }

    //upload the data
    resourcesRef.push(resource);
    alert("Please wait for 2.6 seconds while the resource is being uploaded.");
    this.setState({
      source:"",
      url:"",
      topic: "",
      description:"",
      difficulty:"",
      type:""
    });
    
    //wait for 2.6 seconds before user gets redirected
    setTimeout(() => {
      window.location.replace('/');
    }, 2600);
    //window.location.replace('/');
  }

  //Display the add resource page
  render(){
    return (
      <Container fluid style={{backgroundColor:"#f5f5f5",paddingLeft:"0px", paddingRight:"0px"}}>
        <Header/>
        <Container className="wrapper">
          <form onSubmit={this.handleSubmit}>
            <h2 style={{textAlign:"center"}}>Add Resource</h2>
            <br/>

            <TextField 
              variant="outlined" 
              size="small" 
              fullWidth="true"
              required="true"
              placeholder="Youtube Channel/Website/Author"
              name="source"
              onChange={this.handleChange}
              /> <br/> <br/>

            <TextField 
              placeholder="Url" 
              variant="outlined" 
              size="small" 
              fullWidth="true"
              required="true"
              name="url"
              onChange={this.handleChange}
              /> 
              <br/> <br/>

              <TextField 
              label="Resource type" 
              id="type"
              variant="outlined" 
              size="small"
              fullWidth="true" 
              required="true" 
              name="type"
              onChange={this.handleChange}
              select> 

                <MenuItem value="videos">Video</MenuItem>
                <MenuItem value="webpages">Webpage</MenuItem>
                <MenuItem value="ebooks">eBook</MenuItem>

              </TextField>

              <br/> <br/>
            <TextField 
              label="Level of difficulty" 
              id="difficulty"
              variant="outlined" 
              size="small"
              fullWidth="true" 
              required="true" 
              name="difficulty"
              onChange={this.handleChange}
              select> 
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>

              </TextField>

              <br/> <br/>
            
            <TextField
              label="Topic" 
              id="topic"
              variant="outlined" 
              size="small" 
              fullWidth="true"
              required="true"
              name="topic"
              onChange={this.handleChange}
              select> 
              {commonSearchs.map((t) => (
                <MenuItem key={t.topic} value={t.topic}>
                  {t.topic}
                </MenuItem>
              ))}
              </TextField>
              <br/> <br/>

            
            {this.descrip()}

            <Button 
              fullWidth="true"
              size = "medium" 
              className="buttons" 
              type="submit"
              value="Submit"
              variant="contained"
              style={{backgroundColor:"#5bc0de"}}
              > 
                Submit
            </Button>

          </form>         
        </Container>
      </Container>
    );
  }
}
export default Addresource;