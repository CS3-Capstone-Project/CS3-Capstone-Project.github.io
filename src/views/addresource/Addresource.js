import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios';

//Firebase
import fire from "../config/fire.js";

//Components
import Header from "../../components/header/Header.js";
import {Col,Container,Row, Jumbotron} from 'reactstrap';
//import Fire from "./login/config/fire";

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
 
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const resourcesRef = fire.database().ref('resource/' + this.state.difficulty + "/" + this.state.type);
    const resource = {
      source: this.state.source,
      url: this.state.url,
      topic: this.state.topic,
      description: this.state.description,
      rating:this.state.rating,
      totalRatings:this.state.totalRatings
    }
    resourcesRef.push(resource);
    this.setState({
      source:"",
      url:"",
      topic: "",
      description:"",
      difficulty:"",
      type:"",
      rating:0,
      totalRatings:0
    });
    alert("Resource added successfully");

    setTimeout(() => {
      window.location.replace('/');
    }, 2500);
    //window.location.replace('/');
  }



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
              label="Source"
              name="source"
              onChange={this.handleChange}
              /> <br/> <br/>

            <TextField 
              label="Url" 
              variant="outlined" 
              size="small" 
              fullWidth="true"
              required="true"
              name="url"
              onChange={this.handleChange}
              /> <br/> <br/>
            
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
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
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

                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>

              </TextField>
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
              label="Description"
              multiline="true"
              variant="outlined"
              rows="3"
              required="true"
              name="description"
              onChange={(event) => this.setState({description:event.target.value})}
              fullWidth="true"/> <br/> <br/>

            <Button 
              fullWidth="true"
              size = "medium" 
              className="buttons" 
              type="submit"
              value="Submit"
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

const commonSearchs = [
  'library',
  'functions',
  'IDE',
  'installation',
  'comments',
  'variables',
  'data types',
  'numbers',
  'casting',
  'operator',
  'list',
  'tuple',
  'set',
  'if...else',
  'while loop',
  'for loop',
  'function',
  'lambda',
  'array',
  'class/object',
  'inheritance',
  'iterator',
  'scope',
  'module',
  'date' ,
  'JSON' ,
  'regex' ,
  'math' ,
  'io' ,
  'PIP' ,
  'user input' ,
  'try..expect',
  'string',
  'read file',
  'delete file' ,
  'write/create file' ,
  'numpy' ,
  'scipy' ,
  'machine learning' ,
  'queue' ,
  'methods' ,
  'keywords',
  'integer',
  'float',
  'double',
  'print',
  'import',

];