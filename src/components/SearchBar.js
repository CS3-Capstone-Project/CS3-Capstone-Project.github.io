/* eslint-disable no-use-before-define */
import React, { Component } from 'react';

//material ui API
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

//Get all searchable elements
import { commonSearchs } from "../views/resources/commonsearchs.js";

//Firebase
import fire from "../views/login/config/fire.js";

//Search sytels
import "./searchBar.scss";

//
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

  //After SearchResult is rendered fetch all resources from the database
  componentDidMount() {
    const webRef = fire.database().ref('resource/beginner/webpages');
    const videosRef = fire.database().ref('resource/beginner/videos');
    const ref = fire.database().ref('resource');
    let temp = [];

    //Fetching the data
    ref.on('value', function(snapshot) { 
      snapshot.forEach(function(levels) {
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
    //Put resources in the temporary array into the resource state
    this.setState({
      resources: temp
    });
  }

  //Display the search element
  render(){
    return(
      <Container>
        {
          <Row>
          {
            this.state.resources.map((data,key) => {
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

  //Make the modal with the searched items visible
  openModal(v){
    this.setState({
      visible: true,
      selection: v,
      displayy:"inline"
    });
  }

  //Make the modal disappear
  closeModal(){
    this.setState({
      visible: false,
      displayy:"none"
    });
  }

  //Display the actual search bar
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