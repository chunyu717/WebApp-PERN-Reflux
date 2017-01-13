/* main.js */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { Router , Route, Link , hashHistory } from 'react-router';
var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

import { DateField, Calendar } from 'react-date-picker'

var schedule = React.createClass({
    getInitialState: function() {
         return {
        //   switch: true,
        //   content : (<Home/>)
         };
    },
    componentDidMount: function() {
		//this.setState({content: (<Home/>) }); 
    },

    responseFacebook : function (response) {
        console.log(response);
    },

    render() {
        
        //const now = new GregorianCalendar(zhCn);
        let date = '2017-04-24' ; 
        
        return (
            <div>
                <div>{/*
                    <FacebookLogin
                        appId="102642933514210"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        cssClass="my-facebook-button-class"
                        icon="fa-facebook" 
                    />   
                */}
                </div>
            </div>      
        );
    }
});
module.exports = schedule;
