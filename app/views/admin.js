/* main.js */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { Router , Route, Link , hashHistory } from 'react-router';

var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
import FacebookLogin from 'react-facebook-login';

import { DateField, Calendar } from 'react-date-picker'

//import Calendar from 'rc-calendar';
// import DatePicker from 'rc-calendar/lib/Picker';
// import zhCn from 'gregorian-calendar/lib/locale/en_US';
// import DateTimeFormat from 'gregorian-calendar-format';
// import GregorianCalendar from 'gregorian-calendar';
// import CalendarLocale from 'rc-calendar/lib/locale/en_US';
// import assign from 'object-assign';
// //import TimePickerLocale from 'rc-time-picker/lib/locale/en_US';
//import TimePickerPanel from 'rc-time-picker/lib/module/Panel';
//const timePickerElement = <TimePickerPanel locale={TimePickerLocale} />;

var admin = React.createClass({
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
        console.log(response.);
    },
    
    onStandaloneChange : function (value) {
      console.log('onStandaloneChange', formatter.format(value));
      console.log(value && formatter.format(value));
    },

    // onChange : function (dateString, { dateMoment, timestamp }) {
    //       console.log(dateString)
    //     },



    render() {
        
        //const now = new GregorianCalendar(zhCn);
        let date = '2017-04-24' ; 
        
        
        
        return (
            <div>
                <div>
                    <FacebookLogin
                        appId="102642933514210"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        cssClass="my-facebook-button-class"
                        icon="fa-facebook" 
                    />
                </div>

                <Calendar
                  dateFormat="YYYY-MM-DD"
                  date={date}
                  onChange={this.onChange}
                />
                     
            </div>      
        );
    }
});
module.exports = admin;
