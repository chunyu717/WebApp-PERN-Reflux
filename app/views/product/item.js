var React = require('react');


var Item = React.createClass({

 //    propTypes: {
 //        login: React.PropTypes.bool
	// },

    componentDidMount: function() {
        
    },

    componentWillReceiveProps:function (/*nextProps*/) {
        
    },


    render: function() {
        var me = this ; 
        var content = [] ;
        if(me.props.items) {
            for( var i = 0 ; i < me.props.items.length ; i++) {
                content.push(
                    <div className="col-sm-4 col-lg-4 col-md-4 col-centered">
                        <img className="img-responsive img-border img-full" src="img/slide-3.jpg" alt=""/>
                        <div className="caption">
                            <h4 className="pull-right">{me.props.items[i].pricing}</h4>
                            <h4 className="pull-left">{me.props.items[i].pricing}</h4>
                        </div>
                    </div>) ; 
            }
        }

        return (
        	<div>
            {content}
            </div>
        );
    }
});

module.exports = Item;