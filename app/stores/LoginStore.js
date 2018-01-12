var Reflux = require('reflux'),
    LoginActions = require('../actions/LoginActions');

var LoginStore = Reflux.createStore({
	listenables: [LoginActions],

	login: function(data){
		var me = this;
        $.ajax({
            url: 'http://localhost/api/login',
            method: 'POST',
            data: {
				username : data.user,
				password: data.password
			},
        }).done(function(returnData) {

            var token = { access_token: returnData.token, refresh_token: 'refresh_token', expires_in: 7533967} ;
            me.setToken(token, false);

			//me.trigger('login', true, returnData);
			document.location.href = '#/admin';
        }).error(function(returnData){
            me.trigger('login', false, returnData);
        });
    },

    logout: function() {
        console.log('logoutStore');

		this.deleteSessionStorage('ACCESS_TOKEN');
		this.deleteSessionStorage('REFRESH_TOKEN');
    },

    setSessionStorage: function(key, value) {
		if (typeof(Storage) !== "undefined") {
			sessionStorage.setItem(key, value);
		}
    },
    
	deleteSessionStorage: function(key) {
		if (typeof(Storage) !== "undefined" && sessionStorage.getItem(key)) {
			sessionStorage.removeItem(key);
		}
    },
    
	setToken: function(token, setGlobal) {
		var now = new Date(),
			buffer = 15;
		// if (setGlobal) {
		// 	ACCESS_TOKEN = token.access_token;
		// 	REFRESH_TOKEN = token.refresh_token;
		// }

		console.log(token.access_token) ; 

		sessionStorage.clear();
		this.setSessionStorage('ACCESS_TOKEN', token.access_token);
		this.setSessionStorage('REFRESH_TOKEN', token.refresh_token);
		this.setSessionStorage('LAST_REQUEST', now);
		this.setSessionStorage('TIMEOUT_INTERVAL', (token.expires_in - buffer) * 1000); //抓 15 秒(buffer)當誤差的 buffer
		this.setSessionStorage('TIMEOUT_AT', now + (token.expires_in - buffer) * 1000 ); //抓 15 秒(buffer)當誤差的 buffer

		this.deleteSessionStorage('errorMsg');

		$.ajaxSetup({
			headers: { Authorization: "Bearer " + token.access_token },
			cache: false
		});
	},
});

module.exports = LoginStore;
