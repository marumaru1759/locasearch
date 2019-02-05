import * as types from './mutation-types'
import * as fb from '../api/firebase'

export default {
	[types.AUTH_LOGIN] (state, payload) {
		state.auth = payload
	},

	userRegister(state, { email, password }){
		fb.firebaseapp.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  			// Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
}).then(function(){ 
					state.currentUser.uid =  fb.firebaseapp.auth().currentUser.uid; 
					console.log(state.currentUser.uid);
					state.currentUser.email = fb.firebaseapp.auth().currentUser.email;
					console.log(state.currentUser.email);
})		
	} 

}

