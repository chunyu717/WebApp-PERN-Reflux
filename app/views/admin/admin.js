/* main.js */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { Router , Route, Link , hashHistory } from 'react-router';
var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

import { DateField, Calendar } from 'react-date-picker'
//import Dashboard from './views/Dashboard'; 
//var Login = require("../views/login");
import $ from 'jquery'; 

import Dashboard from './views/Dashboard'; 
import DoctorList from './views/DoctorList'; 
import PurchaseList from './views/PurchaseList'; 
import Schedule from './views/Schedule'; 
import ReservationSchedule from './views/ReservationSchedule'; 
import Products from './views/Products';

var schedule = React.createClass({
    getInitialState: function() {
         return {
            page: 'Login', sidenavToggled: false, content: '', cart: [], purchaseNum: 1
        //   switch: true,
        //   content : (<Home/>)
         };
    },

    componentWillMount: function() {
		this.setAjaxOptions();
    },

    componentDidMount: function() {
		//this.setState({content: (<Home/>) }); 
    },

    setAjaxOptions: function() {
		var me = this;

        var ACCESS_TOKEN = sessionStorage.getItem('ACCESS_TOKEN') ;
        console.log('ACCESS_TOKEN = '  + ACCESS_TOKEN ) ;
        console.log('typeof(Storage) = '  + typeof(Storage) ) ;


            if (ACCESS_TOKEN) {

                $.ajaxSetup({
                    beforeSend: function(xhr) {
                        var timeoutInterval,
                            //timeoutAt,
                            lastRequest,
                            now = +new Date();
            
                        if (typeof(Storage) !== "undefined") {
                
                            timeoutInterval = sessionStorage.getItem('TIMEOUT_INTERVAL');
                            //timeoutAt = sessionStorage.getItem('TIMEOUT_AT');
                            lastRequest = sessionStorage.getItem('LAST_REQUEST');
                            timeoutInterval = timeoutInterval ? +timeoutInterval : 0;
                            //timeoutAt = timeoutAt ? +timeoutAt : 0;
                            lastRequest = lastRequest ? +lastRequest : 0;

                            if (now - lastRequest > timeoutInterval) { // 顯示即將登出提示，確認後執行"登出"
                                me.showTimeoutModal();
                                return false;
                            } else {
                                sessionStorage.setItem('LAST_REQUEST', now);
                }
                //console.log('hi set xhr ' ) ;
                //console.log(xhr);
                xhr.setRequestHeader("Authorization", "Bearer " + ACCESS_TOKEN);
                        }
                    },
                    //headers: { Authorization: "Bearer " + ACCESS_TOKEN },
                    cache: false
                });
            } else {
                console.log('no token bye!')
                //document.location.href = '/login';
        }
    },

    addnavClass: function(){
        console.log('addnavClass');
        if( !this.state.sidenavToggled) {
            this.setState({sidenavToggled: true},function() { $('#pseudoBody').addClass('sidenav-toggled'); }) ; 
        } else {
          this.setState({sidenavToggled: false},function() { $('#pseudoBody').removeClass('sidenav-toggled'); }) ; 
        }
    },

    logout: function(){
        sessionStorage.removeItem('ACCESS_TOKEN');
        sessionStorage.removeItem('REFRESH_TOKEN');
        document.location.href = '#/login';
    },
        
    setBlock: function(page, param) {
        var me = this ; 
          switch(page){
            case 'Dashboard':
                this.setState({content: <Dashboard/>}) ;
                break;
            case 'DoctorList':
                this.setState({content: <DoctorList/>}) ;
                break;
            case 'ReservationSchedule':
                this.setState({content: <ReservationSchedule/>}) ;
            break;
            case 'Schedule':
                this.setState({content: <Schedule/>}) ;
                break;
            case 'Products':
                this.setState({content: <Products category={param} addProductToCart={ me.addProductToCart } />}) ;
            break;
            case 'PurchaseList':
                this.setState({content: <PurchaseList cart={this.state.cart} />}) ;
            break;
            default : 
               this.setState({content: <Dashboard/>}) ;
            break;
        }
    },
    // responseFacebook : function (response) {
    //     console.log(response);
    // },

    render() {
        
        var me  = this; 
        if( sessionStorage.getItem('ACCESS_TOKEN') ) {
        return (
            <div className="fixed-nav sticky-footer bg-dark" id="pseudoBody">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <a href="/app" className="navbar-brand" onClick={ () => {this.setBlock('Dashboard')} }>診所管理系統</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                    <a className="nav-link" onClick={ () => {this.setBlock('Dashboard')} }>
                        <i className="fa fa-fw fa-dashboard"  ></i>
                        <span className="nav-link-text">Dashboard</span>
                    </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                    <a className="nav-link"  onClick={ () => {this.setBlock('DoctorList')} }>
                        <i className="fa fa-fw fa-area-chart" ></i>
                        <span className="nav-link-text">醫生</span>
                    </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                    <a className="nav-link" >
                        <i className="fa fa-fw fa-area-chart"></i>
                        <span className="nav-link-text">病患管理</span>
                    </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                    <a className="nav-link" onClick={ () => {this.setBlock('ReservationSchedule')} }>
                        <i className="fa fa-fw fa-area-chart"></i>
                        <span className="nav-link-text">預約管理</span>
                    </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                    <a className="nav-link" onClick={ () => {this.setBlock('Schedule')} }>
                        <i className="fa fa-fw fa-area-chart"></i>
                        <span className="nav-link-text">門診時間管理</span>
                    </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Products">
                    <a className="nav-link" /*href="tables.html"*/ data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion" onClick={ () => {this.setBlock('Products', 'all')} } >
                        <i className="fa fa-fw fa-table"></i>
                        <span className="nav-link-text">耗材管理</span>
                    </a>
                    <ul className="sidenav-second-level collapse" id="collapseComponents">
                        <li>
                        <a /*href="navbar.html"*/ onClick={ () => {this.setBlock('Products', 'aaa')} }  >骨粉膠原蛋白生物材料</a>
                        </li>
                        <li>
                        <a  className="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti2" onClick={ () => {this.setBlock('Products', 'bbb')} }  >根管材料</a>
                        <ul className="sidenav-third-level collapse" id="collapseMulti2">
                            <li>
                            <a /*href="#"*/ onClick={ () => {this.setBlock('Products', 'bbb')} } >根管治療設備</a>
                            </li>
                            <li>
                            <a onClick={ () => {this.setBlock('Products', 'bbb')} } >鎳鈦旋轉器械 / 電動</a>
                            </li>
                            <li>
                            <a onClick={ () => {this.setBlock('Products', 'bbb')} } >根管手用器械</a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
                    <a className="nav-link" /*href="#"*/>
                        <i className="fa fa-fw fa-link"></i>
                        <span className="nav-link-text">Link</span>
                    </a>
                    </li>
                </ul>
                <ul className="navbar-nav sidenav-toggler">
                    <li className="nav-item">
                    <a className="nav-link text-center" id="sidenavToggler" onClick={ () => {this.addnavClass()} } >
                        <i className="fa fa-fw fa-angle-left"></i>
                    </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"  >
                    <a className="nav-link" onClick={ () => { this.setBlock('PurchaseList') }  } >
                        <i className="fa fa-shopping-cart"></i>
                        {/* {' ' + Object.keys( me.state.cart ).reduce( function( sum, key ){  return sum + parseFloat( me.state.cart[key] );  }, 0 ) } */}
                        {' ' + me.state.cart.reduce( function(sum , element)  { return sum + parseFloat( element.purchaseNum );  }, 0 ) }
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="modal" /*data-target="#exampleModal"*/ onClick={ () => { this.logout('Logout') }  } >
                        <i className="fa fa-fw fa-sign-out"></i>Logout</a>
                    </li>
                </ul>
                </div>
            </nav>
            <div className="content-wrapper" style={ { paddingTop: "70px" } }>
                {/* <div className="container-fluid">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">My Dashboard</li>
                </ol>
                </div> */}
                <div className="container-fluid">
                {/* {content} */}
                {this.state.content}
                </div>
                {/* <footer className="sticky-footer">
                <div className="container">
                    <div className="text-center">
                    <small>Copyright © Your Website 2017</small>
                    </div>
                </div>
                </footer> */}
            </div>
            </div>
        );
        } else {
        document.location.href = '/login';
        }
    }
});
module.exports = schedule;
