import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './LP_button.scss';

class HomeButton extends Component {
    render() { 
        return ( 
            <Button className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-chevron-down"></span>Go back</Button> );
    }
}
 
export default HomeButton;