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
import Fire from "../views/config/fire.js";

import "./searchBar.scss";

class SearchResult extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos : [],
      webpages : [],
      resources: [],
      source:"",
      url:"",
      topic: "",
      description:"",
      rating:0,
      totalRatings:0,
    }
  }

  componentDidMount() {
    const webRef = Fire.database().ref('resource/beginner/webpages');
    const videosRef = Fire.database().ref('resource/beginner/videos');
    const ref = Fire.database().ref('resource');
    let temp = [];

    ref.on('value', function(snapshot) { 
      snapshot.forEach(function(levels) { //ordered records, see comment
        levels.forEach(function(type) {
          let res = type.val();
          for(let item in res){
            temp.push({
              id: item,
              source: res[item].source,
              url: res[item].url, 
              topic: res[item].topic,
              description: (commonSearchs.find( function({ topic }){ return topic == res[item].topic;})).description,
              rating: res[item].rating,
              totalRatings: res[item].totalRatings
            });
          };
        });
      });
    });
    this.setState({
      resources: temp
    });
  }

  render(){
    return(
      <Container>
        {/*<div> Deep Shit : {this.props.request}</div>*/}
        {
          <Row>
          {
            this.state.resources.map((data,key) => {
              console.log("This is the Topic " + data.topic);
              if(data.topic == this.props.request){
                return(
                  <Col>
                    <Thumbnail 
                    key={data.id} 
                    id = {data.id} 
                    topic = {data.topic}
                    source = {data.source} 
                    desc = {data.description} 
                    url = {data.url} 
                    rating = {data.rating}
                    style={{backgroundColor:"rgba(255,255,0,0.3)"}}> 
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
        getOptionLabel={function(option){
          if(option.topic == "All"){
            return "";
          }
          else{
            return option.topic;
          }
        }}
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