import React from 'react';
import Reflux from 'reflux';

import LoginActions from '../actions/LoginActions'; 
import LoginStore from '../stores/LoginStore'; 

class Login extends Reflux.Component{
    constructor(props)
    {
        super(props);
        this.store = LoginStore; // <- just assign the store class itself
		this.state = { account: undefined, password: undefined }; // our store will add its own state to the component's
        //this.handleChangeAccount = this.handleChangeAccount.bind(this) ; 
        //this.handleChangePassword = this.handleChangePassword.bind(this) ; 
        this.submit = this.submit.bind(this) ; 

    }
    // componentDidMount() {
    //     LoginActions.login();
    //     // this.updateWindowDimensions();
    //     // window.addEventListener('resize', this.updateWindowDimensions);
    // }

    // handleChangeAccount(e) {
    //     console.log( this.state.account ) ;
	// 	this.setState({ account: e.target.value });
    // }

    // handleChangePassword(e) {
    //     console.log( this.state.password ) ;
	// 	this.setState({ password: e.target.value });
    // }

    submit() {
        var userData = {user : this.accountInput.value, password : this.passwordInput.value } ;
        console.log( userData ) ;
        //document.location.href = '/app';

		LoginActions.login( userData );
	}
    
    render() {
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input className="form-control" id="exampleInputEmail1" ref={(input) => { this.accountInput = input; }} type="text" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input className="form-control" id="exampleInputPassword1" ref={(input) => { this.passwordInput = input; }} type="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" /> Remember Password</label>
                            </div>
                        </div>
                        <a className="btn btn-primary btn-block" /*href="index.html"*/ onClick={this.submit}>Login</a>
                        </form>
                        <div className="text-center">
                        <a className="d-block small mt-3" href="register.html">Register an Account</a>
                        <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;