var React = require('react');
var Reflux = require('reflux'),
    ProductActions = require('../actions/ProductActions'),
    ProductStore = require('../stores/ProductStore');
var Item = require('./product/item');


var product = React.createClass({

    mixins: [
        Reflux.listenTo(ProductStore, "onLoadResult")
    ],
    
    propTypes: {
        login: React.PropTypes.bool
	},

    getInitialState: function() {
        return {
          login: false,
          items: {}
        };
    },

    componentDidMount: function() {
        var me = this;
        this.setState({page: 'Home'}); 

        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                me.setState({login: true}); 
                ProductActions.load();
              } else if (response.status === 'not_authorized') {
                me.setState({login: false}); 
              } else {
                me.setState({login: false}); 
              }
        }); 
    },

    componentWillReceiveProps:function (/*nextProps*/) {
        var me = this;
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                me.setState({login: true}); 
                ProductActions.load();
              } else if (response.status === 'not_authorized') {
                me.setState({login: false}); 
              } else {
                me.setState({login: false}); 
              }
        }); 
    },

    onLoadResult: function (eventId, success, result) {
        var me = this;
        if(eventId === 'loadProducts' && success) {
            me.setState({items: result}); 
        }

        if(eventId === 'loadProducts' && !success) {
            console.log(result) ; 
        }
    },

    render: function() {
        var me = this ; 
        var products = (me.state.login) ?  <Item items= {me.state.items}/> : <p> 登入才可顯示內容 !</p> ; 

        return (
            <div>
                {products}
            </div>
        );
    }
});

module.exports = product;