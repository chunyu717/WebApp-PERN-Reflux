var React = require('react');


var Item = React.createClass({

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
                    <div className="col-sm-4 col-lg-4 col-md-4 col-centered" key={i}>
                        <img className="img-responsive img-border img-full" src="img/slide-3.jpg" alt=""/>
                        <div className="row">
                            <div style={{float: "left", marginLeft: '15px'}}><h4>{me.props.items[i].name} </h4></div>
                            <div style={{float: "right", marginRight: '15px'}}><h4 >NT : {me.props.items[i].pricing}</h4></div>
                        </div>
                        <h5>{me.props.items[i].long_description}</h5>
                    </div>) ; 
            }
        }

        return (
        	<div style={{padding: '20px'}}>
            {content}
            </div>
        );
    }
});

module.exports = Item;