var React = require('react');


var product = React.createClass({

    propTypes: {
		product: React.PropTypes.object.isRequired
	},

    render: function() {
        return (
            <div className="col-lg-12 text-center">
                <img className="img-responsive img-border img-full" src="img/slide-3.jpg" alt=""/>
                <h2>{this.props.product.name}
                    <small>  {this.props.product.created_at}</small>
                </h2>
                <p>{this.props.product.long_description}</p>
                <hr/>
            </div>
        );
    }
});

module.exports = product;