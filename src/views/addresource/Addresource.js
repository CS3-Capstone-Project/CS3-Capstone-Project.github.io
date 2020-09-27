import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Fire from "./login/config/fire";

const DOC = /docx|doc|pdf|txt/;
const SPREADSHEET = /xlsx|csv/;
const PRESENTATION = /ppt|pptx/;
class Addresource extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      nameOfResource:"",
      link:"",
      selectedFile: null,
      description:""
    }
  }
  // On file select (from the pop up)
    onFileChange = event => {

      // Update the state
      this.setState({ selectedFile: event.target.files[0] });

    };

    // On file upload (click the upload button)
    onFileUpload = () => {

      // Create an object of formData
      const formData = new FormData();

      // Update the formData object
      if (this.state.selectedFile) {
        formData.append(
          "myFile",
          this.state.selectedFile,
          this.state.selectedFile.name
        );
      }
      else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
      // Details of the uploaded file
      console.log(this.state.selectedFile);

      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {

      if (this.state.selectedFile) {

        return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };
  render(){
    const options = [
        'PDF', 'Website', 'Video'
      ];
      const defaultOption = options[0];

      const handleChange = (event) => {
        const name = event.target.name;
        this.setState({
          ...this.state,
          [name]: event.target.value,
        });
      };
    return (
      <div>
      <MuiThemeProvider>
      <div>
      <AppBar
      title="Add Resource"/>
      <label htmlFor="myInput">Name of Resource </label>
      <input id="myInput" type="text" /><br/><br/>
      <label htmlFor="myInput">Link to Resource </label>
      <input id="myInput" type="link" /><br/><br/>
      <label htmlFor="myInput"> Type of Resource</label>
      <Select
          native
          value={this.state.type}
          onChange={handleChange}
          inputProps={{
            type:"Type..."
          }}
          style={{width:"157px",
          justifyContent: "center",
          alignItems: "center"}}
        >
          <option style={{display:"flex",justifyContent: "center",alignItems: "center"}} value="Type">Type..</option>
          <option value="Video">Video</option>
          <option value="Website">Website</option>
          <option value="PDF">PDF</option>
        </Select><br/><br/>
        <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
          <iframe src="https://trinket.io/embed/python/edd948bf08" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
      </div>
      </MuiThemeProvider>
      </div>
    );
  }

}
export default Addresource;
