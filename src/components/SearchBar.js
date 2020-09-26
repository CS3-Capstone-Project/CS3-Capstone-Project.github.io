/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Modal from 'react-awesome-modal';
import CloseIcon from '@material-ui/icons/Close';

import "./searchBar.scss";

class displayResults extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>Deep Shit</div>
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
            <div>
              <div style={{display:"flex"}}>
                <div style={{paddingLeft:"10px"}}>
                  <h2>{this.state.selection}</h2>
                </div>
                <div className="close">
                  <a href="javascript:void(0);" onClick={() => this.closeModal()}><CloseIcon fontSize="large" style={{color:"black"}}/></a>
                </div>
              </div>
              <div>Deep shit</div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

const commonSearchs = [
  { name: '_future'},
  { name: '_main' },
  { name: '_dummy_thread' },
  { name: '_thread' },
  { name: 'abc' },
  { name: 'aifc' },
  { name: 'array' },
  { name: 'ast' },
  { name: 'audiooop' },
  { name: 'bdb'},
  { name: 'for loop'},
  { name: 'while loop'},

  { name: 'base64'},
  { name: 'binascii'},
  { name: 'calendar' },
  { name: 'cmath' },
  { name: 'copy' },
  { name: 'copyreg' },
  { name: 'dataClasses' },
  { name: 'decimal' },
  { name: 'dis' },
  { name: 'difflib'},

  { name: 'email'},
  { name: 'enum'},
  { name: 'errno' },
  { name: 'for loops' },
  { name: 'loops' },
  { name: 'http' },
  { name: 'io' },
  { name: 'import' },
  { name: 'json' },
  { name: 'keyword'},

  { name: 'math'},
  { name: 'mmap'},
  { name: 'nis' },
  { name: 'os' },
  { name: 'pdp' },
  { name: 'pty' },
  { name: 'posix' },
  { name: 'queue' },
  { name: 'numpy' },
  { name: 'conditions'},
];