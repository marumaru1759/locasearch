import * as fb from './firebase'


export default {
	login: authInfo => {
		return new Promise(function (resolve, reject){
			fb.firebaseapp.auth().signInWithEmailAndPassword(authInfo.email, authInfo.password)
			.catch(function(error){
				var errorCode = error.code;
				var errorMessage = error.message;
				reject(errorMessage)
			}).then(function(){
				resolve({ uid: fb.firebaseapp.auth().currentUser.uid,  email: fb.firebaseapp.auth().currentUser.email})	
			})
		})
	},
	
	logout: () => {
		return new Promise(function(resolve, reject){
			fb.firebaseapp.auth().signOut().catch(function(error){
				console.log("alert");
			}).then(function(){
				resolve({ uid: null, email: null })	
			})
		})
	},

	userRegister: ( email, password ) => {
		return new Promise(function(resolve, reject){
			console.log(email);
			console.log(password);
			fb.firebaseapp.auth().createUserWithEmailAndPassword(email, password)
			.catch(function(error) {
  			// Handle Errors here.
  				var errorCode = error.code;
  				var errorMessage = error.message;
  				if (errorCode == 'auth/weak-password'){
  					reject("Your password is too weak")
  				} else {
  					reject(errorMessage)
  				}
  			}).then(function(){
  				resolve({ uid: fb.firebaseapp.auth().currentUser.uid,  email: fb.firebaseapp.auth().currentUser.email})	
  			})
		})
	}

}
	




