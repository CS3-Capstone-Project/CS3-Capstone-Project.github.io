import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

class Dropbox extends Component {
    //state = {  }
    render() { 
        return (
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Select level
                </Dropdown.Toggle>
          
                <Dropdown.Menu>
                     <li><Dropdown.Item href="#/action-1">Beginner</Dropdown.Item></li>
                     <li><Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item></li>
                     <li><Dropdown.Item href="#/action-3">Advanced</Dropdown.Item></li>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}
 
export default Dropbox;