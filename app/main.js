/* main.js */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { Router , Route, Link , hashHistory } from 'react-router';

var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var About = require('./view/about');
var Home = require('./view/home.js');
var Blog = require('./view/blog.js');
var Contact = require('./view/contact.js');
//import about from './view/about';

var Main = React.createClass({
    getInitialState: function() {
        return {
          switch: true,
          content : (<Home/>)
        };
    },
    componentDidMount: function() {
		this.setState({content: (<Home/>) }); 
    },
    // _toggle() {
    //     this.setState({
    //         switch: !this.state.switch
    //     });
    // },
    setBlock: function(page) {
        switch(page){
            case 'Home':
                this.setState({content: (<Home/>) }); 
                break;
            case 'About':
                this.setState({content: (<About/>) }); 
                break;
            case 'Blog':
                this.setState({content: (<Blog/>) }); 
                break;
            case 'Contact':
                this.setState({content: (<Contact/>) }); 
                break;
        }
    },
    render() {
        
        return (
            <div>
                <div className="brand">Business Casual</div>
                <div className="address-bar">3481 Melrose Place | Beverly Hills, CA 90210 | 123.456.7890</div>

                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">Business Casual</a>
                        </div>
                       
                        
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Button bsStyle="link" bsSize="large" style={{fontSize: '30px', width: '200px'}} onClick={ () => {this.setBlock('Home')} } >Home</Button>
                                </li>
                                <li>
                                     {/*<Link to='about'>about</Link>*/}
                                     <Button bsStyle="link" bsSize="large" style={{fontSize: '30px', width: '200px'}} onClick={ () => {this.setBlock('About')} } >About</Button>
                                </li>
                                <li>
                                  <Button bsStyle="link" bsSize="large" style={{fontSize: '30px', width: '200px'}} onClick={ () => {this.setBlock('Blog')} } >Blog</Button>
                                </li>
                                <li>
                                    <Button bsStyle="link" bsSize="large" style={{fontSize: '30px', width: '200px'}} onClick={ () => {this.setBlock('Contact')} } >Contact</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                {this.state.content}

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p>Copyright &copy; Your Website 2014</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>      
        );
    }
});
module.exports = Main;
//React.render(<Main />, document.body);
//ReactDOM.render(<Main />, document.body);
//ReactDOM.render(<Main />, document.getElementById("app") );
//ReactDOM.render(<Router history={hashHistory} routes={Routes} />, document.getElementById("app") );
