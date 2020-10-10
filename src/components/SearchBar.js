/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Modal from 'react-awesome-modal';
import CloseIcon from '@material-ui/icons/Close';

//Components
import Thumbnail from "./thumbnail/Thumbnail.js";

//React Bootstrap API
import {Container} from 'reactstrap';
import {Row} from 'reactstrap';
import {Col} from 'reactstrap';

import { commonSearchs } from "../views/resources/commonsearchs.js";

//Firebase
import fire from "../views/login/config/fire.js";

import "./searchBar.scss";

class SearchResult extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos : [],
      webpages : [],
      source:"",
      url:"",
      topic: "",
      description:"",
      rating:0,
      totalRatings:0,
    }
  }

  componentDidMount() {
    const webRef = fire.database().ref('resource/beginner/webpages');
    const videosRef = fire.database().ref('resource/beginner/videos');
    videosRef.on('value', (snapshot) => {
      let vids = snapshot.val();
      let temp = [];
      for (let item in vids) {
        temp.push({
          id: item,
          source: vids[item].source,
          url: vids[item].url, 
          topic: vids[item].topic,
          description: vids[item].description,
          rating: vids[item].rating,
          totalRatings: vids[item].totalRatings
        });
      }
      this.setState({
        videos: temp
      });
    });

    webRef.on('value', (snapshot) => {
      let web = snapshot.val();
      let wdt = [];
      for (let item in web) {
        wdt.push({
          id: item,
          source: web[item].source,
          url: web[item].url, 
          topic: web[item].topic,
          description: web[item].description,
          rating: web[item].rating,
          totalRatings: web[item].totalRatings
        });
      }
      this.setState({
        webpages: wdt
      });
    });
  }

  render(){
    return(
      <Container>
        {/*<div> Deep Shit : {this.props.request}</div>*/}
        {
          <Row>
          {
            this.state.webpages.map((data,key) => {
              console.log("This is the Topic " + data.topic);
              if(data.topic == this.props.request){
                return(
                  <Col>
                    <Thumbnail 
                    key={data.id} 
                    id = {data.id} 
                    source = {data.source} 
                    desc = {data.description} 
                    url = {data.url} 
                    rating = {data.rating}
                    style={{backgroundColor:"rgba(255,56,0,0.3)"}}> 
                    </Thumbnail>
                  </Col>
                );
              }
            })
          }
        </Row>
      }
      </Container>
    ); 
  }
}

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      selection: "",
      visible: false,
      displayy:"none"
    }
  }

  openModal(v){
    this.setState({
      visible: true,
      selection: v,
      displayy:"inline"
    });
  }

  closeModal(){
    this.setState({
      visible: false,
      displayy:"none"
    });
  }

  render(){
    return (
      <div>
      <Autocomplete
        id="searchBar"
        options={commonSearchs}
        getOptionLabel={(option) => option.topic}
        style={{ width: 200 }}
        renderInput={(params) => <TextField {...params} color="primary" label="Search" variant="outlined" fullWidth/>}
        onChange={(event,value) => {
          if(value != null){
            
            this.openModal(value.topic);

          }
        }}
        size={"small"}/>

        <div id="modalWrapper" style={{display: `${this.state.displayy}` }}>
          <Modal visible={this.state.visible} width="95%" height="600px" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <div className="modal-container">
              <div style={{display:"flex"}}>
                <div style={{paddingLeft:"10px"}}>
                  <h2>{this.state.selection}</h2>
                </div>
                <div className="close">
                  <a href="javascript:void(0);" onClick={() => this.closeModal()}><CloseIcon fontSize="large" style={{color:"black"}}/></a>
                </div>
              </div>
              <hr/>

              <SearchResult request={this.state.selection}/>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}