var Reflux = require('reflux'),
	ProductActions = require('../actions/ProductActions');

var ProductStore = Reflux.createStore({
	listenables: [ProductActions],

	load: function(params){
		var me = this;
        $.ajax({
            url: 'http://122.116.214.159/api/getShoesProducts',
            method: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        }).done(function(returnData) {
            me.trigger('loadProducts', true, returnData);
        }).error(function(returnData){
            me.trigger('loadProducts', false, returnData);
        });
	},
});

module.exports = ProductStore;
