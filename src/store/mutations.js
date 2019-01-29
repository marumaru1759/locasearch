import * as types from './mutation-types'
import firebase from 'firebase/app';
import 'firebase/auth'

const config = {
	apiKey: "AIzaSyBTtRuNAeLj9RdkYz5XpsC7u579QqLAmpg",
    authDomain: "locasearch.firebaseapp.com",
    databaseURL: "https://locasearch.firebaseio.com",
    projectId: "locasearch",
    storageBucket: "locasearch.appspot.com",
    messagingSenderId: "660314635299"
};

export const firebaseapp firebase.initializeApp(config);

 
export default {
	[types.AUTH_LOGIN] (state, payload) {
		state.auth = payload
	},

	userRegister (state, { email, password }){
		firebaseapp.auth().createUserwithEmailAndPassword(email, password).catch(function(error) {
  			// Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
	}

}

