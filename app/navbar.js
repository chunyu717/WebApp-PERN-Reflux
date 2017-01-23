/* main.js */

'use strict';

var React = require('react');
var Reflux = require('reflux');
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

var LoginModal = require('./views/loginModal.js');

var StatisticsActions = require('./actions/StatisticsActions'),
    StatisticsStore = require('./stores/StatisticsStore');
//import FacebookLogin from 'react-facebook-login';

var Navbar = React.createClass({

    mixins: [
        Reflux.listenTo(StatisticsStore, "onLoadResult")
    ],

    getInitialState: function() {
        return {
          switch: true,
          showModal: false,
          login: false,
          page: 'Home',
          reviewCount: 0,
          userInfo: {}
        };
    },

    componentDidMount: function() {
        var me = this;
		this.setState({page: 'Home'}); 
        setTimeout(function(){ 
            FB.getLoginStatus(function(response) {
                //console.log(response)
                if (response.status === 'connected') {
                    me.setState({login: true, userInfo: response}); 
                  } else if (response.status === 'not_authorized') {
                    me.setState({login: false}); 
                  } else {
                    me.setState({login: false}); 
                  }
            }); 
        }, 3000);
        window.addEventListener('google-loaded',me.renderGoogleLoginButton);

        StatisticsActions.reviewCountAddThenGet();
    },

    componentWillUpdate: function() {
       
    },

    onLoadResult: function (eventId, success, result) {
        var me = this;
        if(eventId === 'reviewCountAddThenGet' && success) {
            //console.log(result);
            me.setState({reviewCount: result,  reviewCount: result[0].review_count}); 
        }

        if(eventId === 'loginUserLIntoDB') {
            //console.log(result) ; 
        }

    },
   
    renderGoogleLoginButton: function() {
        var me = this;
        console.log('rendering google signin button')
        gapi.signin2.render('g-signin2', {
          'scope': 'https://www.googleapis.com/auth/plus.login',
          'width': 200,
          'height': 50,
          'longtitle': true,
          'theme': 'light',
          'onsuccess': me.onSignIn
        })
    },

    onSignIn: function(page) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    },

    setBlock: function(page) {
        this.setState({page: page}) ;
    },

    login: function() {
        var me = this ; 
        FB.login(function(response){
            //console.log(response)
            if (response.status === 'connected') {
                me.setState({login: true, userInfo: response}); 
                FB.api( '/me?fields=id,first_name,last_name,picture,email,link,gender' , 
                    function (response2) {
                      if (response2 && !response2.error) {
                        //console.log(response2);
                        StatisticsActions.loginUserLIntoDB(response2);
                      }
                    }
                );
            } else if (response.status === 'not_authorized') {
                me.setState({login: false}); 
            } else {
                me.setState({login: false}); 
            }
        }, {scope: 'email, user_likes', return_scopes: true});
    },
    logout: function() {
        var me = this ; 
        FB.logout(function(response) {
            me.setState({login: false, userInfo: {} }); 
        });
    },

    open: function() {
       this.refs.refLoginInForm.show();
    },

    close: function() {
        this.refs.refLoginInForm.close();
    },

    render() {
        var me = this, loginIcon = {} ; 
        var content ; 
        var imgSrc = '' ; 
        if( me.state.userInfo.authResponse &&  me.state.userInfo.authResponse.userID){
            imgSrc = 'http://graph.facebook.com/' + me.state.userInfo.authResponse.userID + '/picture?height=15' ; 
        }

        loginIcon = this.state.login ? <i><img src={imgSrc} />  Facebook登出</i> : <i className="fa fa-user-circle">  Facebook登入</i> ;
        
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
                                {/*<li>
                                    <a onClick={ () => {this.setBlock('Product')} }>周邊產品</a>
                                </li>
                                */}
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                {/*<li><div className="g-signin2" data-onsuccess={this.onSignIn}></div></li>
                                <li><a onClick={ this.state.login ? () => {this.logout()} : () => {me.open()} }>{loginIcon}  </a></li>*/}
                                <li><a>累積瀏覽人次: {this.state.reviewCount}</a></li>
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
                <div style={{padding: "30px 0 10px"}}>
                    <div className="col-lg-12 text-center">
                        <p>Copyright &copy; Hosen Blind Massage 2016</p>
                    </div>
                </div>
                <LoginModal ref = "refLoginInForm" />
            </div>      
        );
    }
});
module.exports = Navbar;
