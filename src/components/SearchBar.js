/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Modal from 'react-awesome-modal';
import CloseIcon from '@material-ui/icons/Close';

//Components
import Thumbnail from "./thumbnail/Thumbnail.js";

import "./searchBar.scss";

class SearchResult extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <div> Deep Shit : {this.props.request}</div>
        <Thumbnail/>
      </div>
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
      selection: v.name,
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
        getOptionLabel={(option) => option.name}
        style={{ width: 200 }}
        renderInput={(params) => <TextField {...params} color="primary" label="Search" variant="outlined" fullWidth/>}
        onChange={(event,value) => {
          if(value != null){
            
            this.openModal(value);

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

const commonSearchs = [
  { name: 'library'},
  { name: 'functions' },
  { name: 'IDE' },
  { name: 'installation' },
  { name: 'comments' },
  { name: 'variables' },
  { name: 'data types' },
  { name: 'numbers' },
  { name: 'casting' },
  { name: 'operator'},
  { name: 'list'},
  { name: 'tuple'},
  { name: 'set'},
  { name: 'if...else'},
  { name: 'while loop' },
  { name: 'for loop' },
  { name: 'function' },
  { name: 'lambda' },
  { name: 'array' },
  { name: 'class/object' },
  { name: 'inheritance' },
  { name: 'iterator'},
  { name: 'scope'},
  { name: 'module'},
  { name: 'date' },
  { name: 'JSON' },
  { name: 'regex' },
  { name: 'math' },
  { name: 'io' },
  { name: 'PIP' },
  { name: 'user input' },
  { name: 'try..expect'},
  { name: 'string'},
  { name: 'read file'},
  { name: 'delete file' },
  { name: 'write/create file' },
  { name: 'numpy' },
  { name: 'scipy' },
  { name: 'machine learning' },
  { name: 'queue' },
  { name: 'methods' },
  { name: 'keywords'},
  { name: 'integer'},
  { name: 'float'},
  { name: 'double'},
  { name: 'print'},
  { name: 'import'},

];