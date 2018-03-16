import React from 'react';
import Popup from 'react-popup';
var FontAwesome = require('react-fontawesome');

export default class Graphic extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div id='phantom'></div>
                <div id='footer'><FontAwesome name='cloud' /> INUBE <FontAwesome name='copyright' />  Design with <FontAwesome name='heart' /> by group 11<span id='legal'><FontAwesome name='exclamation-triangle' /></span></div>
            </div>

        );

    }
}

