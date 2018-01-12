import Reflux from 'reflux';
import DoctorActions from '../actions/DoctorActions'; 

import $ from 'jquery'; 

class DoctorStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = DoctorActions;
    }

    onLoad()
    {
       //console.log('load');
       this.setState({ isloaded: false, loadResult: undefined});
       var me = this;
       $.ajax({
            url: 'http://localhost:8088/api/userList',
            method: 'GET',
            success: function(returnData) {
                console.log('onLoad success!');
                returnData.loadResult =  'success';
                me.setState( returnData ) ;
            },
            error: function(returnData) {
                console.log('onLoad error!');
                //mockData
                var mockData = me._getMockResult() ;
                //mockData.loadResult = 'false' ;
                //me.setState( me._getMockResult ) ;
                me.setState( mockData ) ;
            }
        })
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
                DoctorActions.load();
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
                DoctorActions.load();
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
                    "userId":'9527',
                    "username":'bestwish tsai',
                    "email":'tsai@cht.comt.w',
                    "phone": '7533967',
                    "status":"active",
                    "pic" : "9527.jpg"
                },
                {
                    "userId":'9528',
                    "username":'jerry chang',
                    "email":'jerry1209@cht.comt.w',
                    "phone": '7533967',
                    "status":"inactive",
                    "pic" : "9527.jpg"
                }
            ]
        }
    }

    _getMockUpdateResult() {
        return {
            "lastUpdated":"2014-06-03T16:00:00Z",
            "data":[
                {
                    "userId":'9527',
                    "username":'jerry chang',
                    "email":'jerry1209@cht.comt.w',
                    "phone": '7533967',
                    "status":"active",
                    "pic" : "9527.jpg"
                }
            ]
        }
    }

    _getMockDeleteResult() {
        return {
            "lastUpdated":"2014-06-03T16:00:00Z",
            "data":[
                {
                    "userId":'9527',
                    "username":'jerry chang',
                    "email":'jerry1209@cht.comt.w',
                    "phone": '7533967',
                    "status":"active",
                    "pic" : "9527.jpg"
                }
            ]
        }
    }
}

export default DoctorStore;