import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './LP_button.scss';

class LPButton extends Component {
    state = {  }
    render() { 
        return ( 
            <Button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-chevron-down"></span>Take a learning path</Button> );
    }
}
 
export default LPButton;

