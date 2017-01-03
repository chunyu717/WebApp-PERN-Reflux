/* main.js */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { Router , Route, Link , hashHistory } from 'react-router';

var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var About = require('./views/about');
var Home = require('./views/home.js');
var Blog = require('./views/blog.js');
var Schedule = require('./views/schedule.js');
var Contact = require('./views/contact.js');
var Product = require('./views/product.js');
//import FacebookLogin from 'react-facebook-login';

var Main = React.createClass({
    getInitialState: function() {
        return {
          switch: true,
          login: false,
          page: 'Home'
        };
    },

    componentDidMount: function() {
        var me = this;
		this.setState({page: 'Home'}); 
        setTimeout(function(){ 
            FB.getLoginStatus(function(response) {
                //console.log(response)
                if (response.status === 'connected') {
                    me.setState({login: true}); 
                  } else if (response.status === 'not_authorized') {
                    me.setState({login: false}); 
                  } else {
                    me.setState({login: false}); 
                  }
            }); 
        }, 3000);
    },

    componentWillUpdate: function() {
       
    },
   
    setBlock: function(page) {
        this.setState({page: page}) ;
    },
    login: function() {
        var me = this ; 
        FB.login(function(response){
          if (response.status === 'connected') {
             me.setState({login: true}); 
          } else if (response.status === 'not_authorized') {
             me.setState({login: false}); 
          } else {
            me.setState({login: false}); 
          }
        });
    },
    logout: function() {
        var me = this ; 
        FB.logout(function(response) {
            me.setState({login: false}); 
        });
    },

    render() {
        var me = this,loginIcon = {} ; 
        loginIcon = this.state.login ? <i className="fa fa-user-circle">  Facebook登出</i> : <i className="fa fa-user-circle">  Facebook登入</i> ;
        var content ; 
        switch(this.state.page){
            case 'Home':
                content = <Home/> ; 
                break;
            case 'About':
                content = <About login={ this.state.login }/> ; 
                break;
            case 'Schedule':
                content = <Schedule login={ this.state.login }/> ; 
                break;
            case 'Contact':
                content = <Contact login={ this.state.login }/> ; 
                break;
            case 'Product':
                content = <Product login={ this.state.login }/> ; 
                break;
        }
        
        return (
            <div> 
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand"  onClick={ () => {this.setBlock('Home')} } >宏昇盲人按摩</a>
                        </div>              
                        
                        <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a onClick={ () => {this.setBlock('About')} }>關於宏昇</a>
                                </li>
                                <li>
                                    <a onClick={ () => {this.setBlock('Contact')} }>聯絡宏昇</a>
                                </li>
                                <li>
                                    <a onClick={ () => {this.setBlock('Schedule')} }>預約情形</a>
                                </li>
                                <li>
                                    <a onClick={ () => {this.setBlock('Product')} }>產品</a>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a onClick={ this.state.login ? () => {this.logout()} : () => {this.login()} }>{loginIcon}  </a></li>
                                {/*<li>
                                     <div style={{display:"inline-block", float: "right", padding: "10px 10px 0"}}>
                                        {<div className="fb-like" data-share="true" data-width="30px" data-show-faces="false"></div>}
                                        <div className="fb-login-button" data-max-rows="1" data-width="20px" data-size="small" data-show-faces="true" data-auto-logout-link="true"></div>
                                    </div>
                                </li>*/}
                            </ul>
                        </div>    
                    </div>
                </nav>
                {content}
               

                <div style={{padding: "10px 0 10px"}}>
                    <div className="col-lg-12 text-center">
                        <p>Copyright &copy; Hosen Blind Massage 2016</p>
                    </div>
                </div>
                
            </div>      
        );
    }
});
module.exports = Main;
