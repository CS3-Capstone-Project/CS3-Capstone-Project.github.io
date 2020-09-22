/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <Autocomplete
        id="searchBar"
        options={commonSearchs}
        getOptionLabel={(option) => option.name}
        style={{ width: 200 }}
        renderInput={(params) => <TextField {...params} color="primary" label="Search" variant="outlined" />}
        size={"small"}
        
      />
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