import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Dropbox from './Components/dropbox';
import LPButton from './Components/LP button';


export default class Questionnaire extends Component {
    render() {
        return ( 
           <ul><Dropbox/>
                <li>The learning path is based on the level you chose.</li>
                <li>You can choose not to take the learning path.</li>
                <LPButton/>
            </ul>
        );
    }


}