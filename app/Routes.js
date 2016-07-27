// var Router = require('react-router');
// var Route = Router.Route;
// var NotFoundRoute = Router.NotFoundRoute;
// var DefaultRoute = Router.DefaultRoute;
// var RouteHandler = Router.RouteHandler;
// var Link = Router.Link;

var React = require('react');
//import {Route, IndexRoute} from 'react-router';
import { Router , Route, Link , hashHistory, IndexRoute } from 'react-router';
//import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

var ReactDOM = require('react-dom');

var Main = require("./main");
//var about = require("./view/about");
//var TestTwo = require("./view/TestTwo");
//var routes = (
module.exports =  (
	<Route path="/" >
		<IndexRoute component={Main}/>
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


