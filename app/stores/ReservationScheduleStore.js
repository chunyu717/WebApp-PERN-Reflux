import Reflux from 'reflux';
import ReservationScheduleActions from '../actions/ReservationScheduleActions'; 

import $ from 'jquery'; 

class ReservationScheduleStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = ReservationScheduleActions;
    }

    onLoad()
    {
    
       var me = this;
       me.setState( me._getMockResult() ) ;
       
    //    $.ajax({
    //         url: 'http://localhost:8088/api/reservationSchedule',
    //         method: 'GET',
    //         success: function(returnData) {
    //             console.log('onLoad success!');
    //             returnData.loadResult =  'success';
    //             me.setState( returnData ) ;
    //         },
    //         error: function(returnData) {
    //             console.log('onLoad error!');
    //             //mockData
    //             var mockData = me._getMockResult() ;
    //             //mockData.loadResult = 'false' ;
    //             //me.setState( me._getMockResult ) ;
    //             me.setState( mockData ) ;
    //         }
    //     })
    }

    onDelete(user)
    {
       var me = this;
       this.setState({ isloaded: false, loadResult: undefined});
       $.ajax({
            url: 'http://localhost:8088/api/deleteUser',
            method: 'POST',
            //Date: 'Fri, 06 Oct 2017 02:00:32 GMT',
            //dataType: 'xml',
            //dataType: 'application/json',
            //data: JSON.stringify({"userId": userId}),
            data: JSON.stringify( user ),
            contentType: 'application/json; charset=utf-8',
            Connection: 'Close',            
            success: function(returnData) {
                console.log('onDelete success!');
                ReservationScheduleActions.load();
            },
            error: function(returnData) {
                //mock 
                var mockData ={} ; 
                mockData.loadResult = 'deleteFalse';
                me.setState( mockData ) ;
                //DoctorActions.load();
            }
        })
    }

    onUpdate(user)
    {
       this.setState({ isloaded: false, loadResult: undefined});
       var me = this;
       $.ajax({
            url: 'http://localhost:8088/api/updateUser',
            method: 'POST',
            data: JSON.stringify( user ),
            contentType: 'application/json; charset=utf-8',
            Connection: 'Close',            
            success: function(returnData) {
                console.log('onUpdate success!');
                ReservationScheduleActions.load();
            },
            error: function(returnData) {
                //mock 
                var mockData ={} ; 
                mockData.loadResult = 'updateFalse';
                me.setState( mockData ) ;
            }
        })
    }
    
    _getMockResult() {
        return {
            "lastUpdated":"2014-06-03T16:00:00Z",
            "data":[
                {
                    'title': 'Late Night Event',
                    'start':new Date(2017, 11, 21, 0, 30, 0),
                    'end': new Date(2017, 11, 21, 1, 40, 0)
                },
                {
                    'title': 'Late Night Event2',
                    'start':new Date(2017, 11, 21, 1, 40, 0),
                    'end': new Date(2017, 11, 21, 2, 50, 0)
                },
                {
                    'title': 'Late Night Event',
                    'start':new Date(2017, 11, 21, 2, 30, 0),
                    'end': new Date(2017, 11, 21, 3, 40, 0)
                },
                {
                    'title': 'Multi-day Event',
                    'start':new Date(2017, 11, 21, 19, 30, 0),
                    'end': new Date(2017, 11, 21, 19, 40, 0)
                }
            ]
        }
    }
}

export default ReservationScheduleStore;