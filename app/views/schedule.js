/* main.js */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { Router , Route, Link , hashHistory } from 'react-router';

var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
//import FacebookLogin from 'react-facebook-login';
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
            <div className="container">
                <div className="row">
                    <div className="box">
                        {/*
                        <div style={{display: 'none'}}>
                            <FacebookLogin
                                appId="102642933514210"
                                autoLoad={true}
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                cssClass="my-facebook-button-class"
                                icon="fa-facebook" 
                            />   
                        </div>
                        */}
                        <div>
                            <div style={{margin: "auto", bgcolor: 'C0E7F3', width: '100%'}}>
                                <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23c0c0c0&amp;src=zh-tw.taiwan%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;src=emllrtjnpg9bhe0r1svb6d2krs%40group.calendar.google.com&amp;color=%231B887A&amp;ctz=Asia%2FTaipei" 
                                style = {{width: '100%', height: '600px'}}/>   
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        );
    }
});
module.exports = schedule;
