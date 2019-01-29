import * as types from './mutation-types'
import * as fb from './firebase'

export default {
	[types.AUTH_LOGIN] (state, payload) {
		state.auth = payload
	},

	userRegister (state, { email, password }){
		console.log(typeof fb.firebaseapp.auth().createUserwithEmailAndPassword)
		fb.firebaseapp.auth().createUserwithEmailAndPassword(email, password).catch(function(error) {
  			// Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
	}

}

