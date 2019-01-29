import * as types from './mutation-types'


const firebase = require("firebase");

export default {
	[types.AUTH_LOGIN] (state, payload) {
		state.auth = payload
	},

	userRegister (state, { name, password }){
		firebase.auth().createUserwithEmailAndPassword(email, password).catch(function(error) {
  			// Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
	}

}

