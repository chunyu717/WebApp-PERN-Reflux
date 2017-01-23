// var Router = require('react-router');
// var Route = Router.Route;
// var NotFoundRoute = Router.NotFoundRoute;
// var DefaultRoute = Router.DefaultRoute;
// var RouteHandler = Router.RouteHandler;
// var Link = Router.Link;

var React = require('react');
import { Router , Route, Link , hashHistory, IndexRoute } from 'react-router';
//import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

var ReactDOM = require('react-dom');
var Navbar = require("./navbar");
var Admin = require("./views/admin");

module.exports =  (
	<Route path="/" >
		<IndexRoute component={Navbar}/>
		<Route path="admin" component={Admin}/>

    </Route>
);

//ReactDOM.render(<Router history={hashHistory} >{routes}</Router>, document.getElementById('app')) 
// module.exports =  (
// 	<Route path="/" >
// 		<IndexRoute component={Main}/>
// 		//<Route path="/about" component={about}/>
// 		//<Route path="/pageb" component={TestTwo}/>
//     </Route>
// );


