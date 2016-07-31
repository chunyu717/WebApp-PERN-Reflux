var Reflux = require('reflux'),
	ProductActions = require('../actions/ProductActions');

var ProductStore = Reflux.createStore({
	listenables: [ProductActions],

	load: function(params){
		var me = this;
        $.ajax({
            url: 'http://192.168.134.128:8888/api/getShoesProducts',
            method: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        }).done(function(returnData) {
            me.trigger('load', returnData);
        }).error(function(returnData){
            me.trigger('errorLoad', returnData);
        });
	},
});

module.exports = ProductStore;
