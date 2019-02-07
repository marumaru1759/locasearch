import * as fb from './firebase'


export default {
	login: authInfo => {
		return new Promise(function (resolve, reject){
			fb.firebaseapp.auth().signInWithEmailAndPassword(authInfo.email, authInfo.password).catch(function(error){
				console.log("alert");
			});
			resolve({ uid: fb.firebaseapp.auth().currentUser.uid,  email: fb.firebaseapp.auth().currentUser.email}) 
			})
	},
	
	logout: () => {
		return new Promise(function(resolve, reject){
			fb.firebaseapp.auth().signOut().catch(function(error){
				console.log("alert");
			});
			resolve({ uid: null, email: null })
		})
	},

	userRegister: ( email, password ) => {
		return new Promise(function(resolve, reject){
			fb.firebaseapp.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  			// Handle Errors here.
  				console.log("alert");
  			});
			resolve({ uid: fb.firebaseapp.auth().currentUser.uid,  email: fb.firebaseapp.auth().currentUser.email}) 
			})
	}

}
	




