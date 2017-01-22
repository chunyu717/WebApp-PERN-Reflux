var Reflux = require('reflux'),
	StatisticsActions = require('../actions/StatisticsActions');

var StatisticsStore = Reflux.createStore({
	listenables: [StatisticsActions],

	reviewCountAddThenGet: function(params){
		var me = this;
        $.ajax({
            url: 'http://localhost:8888/api/reviewCountAddThenGet',
            method: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        }).done(function(returnData) {
            me.trigger('reviewCountAddThenGet', true, returnData);
        }).error(function(returnData){
            me.trigger('reviewCountAddThenGet', false, returnData);
        });
	},
    loginUserLIntoDB: function(params){
        var me = this;
        $.ajax({
            url: 'http://localhost:8888/api/reviewCountAddThenGet',
            method: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        }).done(function(returnData) {
            me.trigger('loginUserLIntoDB', true, returnData);
        }).error(function(returnData){
            me.trigger('loginUserLIntoDB', false, returnData);
        });
    },
});

module.exports = StatisticsStore;
