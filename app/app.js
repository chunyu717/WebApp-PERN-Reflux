
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { Router , Route, Link , hashHistory } from 'react-router';
var Routes = require('./Routes.js');


ReactDOM.render(<Router history={hashHistory} routes={Routes} />, document.getElementById("app") );