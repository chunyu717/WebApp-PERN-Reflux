var React = require('react');

var ProductActions = require('../actions/ProductActions');
var ProductStore = require('../stores/ProductStore');
var Reflux = require('reflux');
var Product = require('./product');

var blog = React.createClass({

    mixins: [
        Reflux.listenTo(ProductStore, "onLoadProduct"),
    ],

    getInitialState: function() {
        return {
			products: null
        };
    },

    componentDidMount: function() {
		ProductActions.load();
    },

    onLoadProduct: function(eventId, result) {
		if( eventId === 'load') {
            this.setState({
                products: result
			});
		}
        if( eventId === 'errorLoad') {
            console.log('result = ' + result) ;
		}
	},

    render: function() {

        var getProducts = [] ; 
        if(this.state.products != null ) {
            for(let i = 0; i < this.state.products.length ; i++){
                getProducts.push(<Product product = { this.state.products[i] } />)
            }
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr/>
                            <h2 className="intro-text text-center">
                                <strong>New Products</strong>
                            </h2>
                            <hr/>
                        </div>
                        {/*getProducts*/}
                        
                        <div className="col-lg-12 text-center">
                            <img className="img-responsive img-border img-full" src="img/slide-1.jpg" alt=""/>
                            <h2>Product One
                                <small> October 13, 2013</small>
                            </h2>
                            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <hr/>
                        </div>
                        <div className="col-lg-12 text-center">
                            <img className="img-responsive img-border img-full" src="img/slide-2.jpg" alt=""/>
                            <h2>Product Two
                                <small>  October 13, 2013</small>
                            </h2>
                            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <hr/>
                        </div>
                        <div className="col-lg-12 text-center">
                            <img className="img-responsive img-border img-full" src="img/slide-3.jpg" alt=""/>
                            <h2>Product Three
                                <small>  October 13, 2013</small>
                            </h2>
                            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <hr/>
                        </div>
                        <div className="col-lg-12 text-center">
                            <ul className="pager">
                                <li className="previous"><a href="#">&larr; Older</a>
                                </li>
                                <li className="next"><a href="#">Newer &rarr;</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>


            </div>
        );
    }
});

module.exports = blog;