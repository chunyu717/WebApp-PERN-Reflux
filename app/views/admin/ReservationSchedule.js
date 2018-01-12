import React from 'react';
import Reflux from 'reflux';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// var DateRangePicker = require('react-bootstrap-daterangepicker');
//import DatePicker from 'react-datepicker';
import ReservationScheduleStore from '../stores/ReservationScheduleStore'; 
import ReservationScheduleActions from '../actions/ReservationScheduleActions'; 
import { DatePicker  } from 'antd';
import 'antd/lib/date-picker/style/css';
import { Button, FormControl } from 'react-bootstrap';
//import $ from 'jquery'; 

BigCalendar.momentLocalizer(moment);

class ReservationSchedule extends Reflux.Component {
    constructor(props)
    {
        var now = new Date() ;
        super(props);
        this.state = {  eventTitle: undefined , data: [], //eventStart: undefined, eventEnd: undefined
                        endOpen: false,
                        startDate : moment(now, 'YYYY-MM-DD') , 
                        //startTime : moment(now, 'HH:mm') ,
                        endDate : moment(now, 'YYYY-MM-DD')
                        //endTime : moment(now, 'HH:mm') 
                        }; 
        this.store = ReservationScheduleStore; 
        this.submit = this.submit.bind(this) ; 
        this.handleTitleChange = this.handleTitleChange.bind(this) ; 
        this.handleStartChange = this.handleStartChange.bind(this) ; 
        this.handleEndChange = this.handleEndChange.bind(this) ; 

        this.handleEndOpenChange = this.handleEndOpenChange.bind(this) ; 
        this.disabledStartDate = this.disabledStartDate.bind(this) ; 
        this.handleStartOpenChange = this.handleStartOpenChange.bind(this) ; 

        
        //this.notify = this.notify.bind(this);
    }

    componentDidMount() {
        ReservationScheduleActions.load();
        //this.updateWindowDimensions();
        //window.addEventListener('resize', this.updateWindowDimensions);
    }

    
    handleTitleChange(e) {
        this.setState({ eventTitle: e.target.value });
    }

    
    handleStartChange(e) {
        this.setState({ startDate: e });
    }

    handleEndChange(e) {
        this.setState({ endDate: e });
    }


    handleEndOpenChange(open) {
        this.setState({ endOpen: open });
    }

    disabledStartDate(startValue) {
        const endDate = this.state.endDate;
        if (!startValue || !endDate) {
            return false;
        }
        return startValue.valueOf() > endDate.valueOf();
    }

    handleStartOpenChange(open)  {
        if (!open) {
            this.setState({ endOpen: true });
        }
    }


    submit() {
        console.log( this.state.startDate.format('YYYY-MM-DD HH:mm') );
        console.log( this.state.endDate.format('YYYY-MM-DD HH:mm') );
        console.log( this.state.eventTitle );
        console.log(this.state.data) ;
    }

   

    render() {
        var me = this ; 
        var now = new Date() ;
        console.log(this.state.data) ;


        const { /*startValue, endValue,*/ endOpen } = this.state;

        return (
            <div style={{ padding: '0 20px 0 20px'}}>
                <div>
                    <div>
                        <FormControl
                                style={{ width: '800px', display: 'inline'}}
                                id="titleInput"
                                //ref={(input) => { this.titleInput = input; }}
                                type="text"
                                placeholder="新增標題"
                                value={this.state.eventTitle} onChange={this.handleTitleChange}
                        />
                        {' '}
                    <Button onClick={me.submit} style={{ display: 'inline'}} >新增預約</Button>
                    </div>

                    <DatePicker
                        style={{ width: '350px'}}
                        disabledDate={this.disabledStartDate}
                        showTime={{format: 'HH:mm'}}
                        format="YYYY-MM-DD HH:mm"
                        value={this.state.startDate}
                        placeholder="Start"
                        onChange={this.handleStartChange}
                        onOpenChange={this.handleStartOpenChange}
                    />
                        {'  到  '}
                    <DatePicker
                        style={{ width: '350px'}}
                        disabledDate={this.disabledEndDate}
                        showTime={{format: 'HH:mm'}}
                        format="YYYY-MM-DD HH:mm"
                        value={this.state.endDate}
                        placeholder="End"
                        onChange={this.handleEndChange}
                        open={endOpen}
                        onOpenChange={this.handleEndOpenChange}
                    />
                    {/* <DatePicker id="startDate" ref={(input) => { this.startDate = input; }}  value={ this.state.startDate} onChange={this.handleStartChange} />
                    {' '}
                    <TimePicker id="startTime"  value={ this.state.startDate} format={'HH:mm'} onChange={this.handleStartChange} />
                    {' 到 '}
                    <DatePicker id="endDate"  value={ this.state.endDate} onChange={this.handleEndChange} />
                    {' '}
                    <TimePicker id="endTime"  value={ this.state.endDate} format={'HH:mm'} onChange={this.handleEndChange} /> */}
               
                </div>
                <hr/>
                <BigCalendar
                    selectable
                    //events={myEventsList}
                    //defaultDate={new Date(2015, 4, 20)}
                    events={me.state.data}
                    defaultView= {'week'}
                    //defaultDate={new Date(2017, 12, 1)}
                    defaultDate={now}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={(slotInfo) => alert(
                        `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                        `\nend: ${slotInfo.end.toLocaleString()}` +
                        `\naction: ${slotInfo.action}`
                    )}
                    // startAccessor='startDate'
                    // endAccessor='endDate'
                />
                
                {/* <DateRangePicker startDate={moment('1/1/2014')} endDate={moment('3/1/2014')}>
                    <div>Click Me To Open Picker!</div>
                </DateRangePicker> */}
            </div>
        );
    }
};

export default ReservationSchedule;