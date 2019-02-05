import * as fb from './firebase'


export default {
	login(authInfo){
		fb.firebaseapp.auth().signInWithEmailAndPassword(authInfo.email, authInfo.password).catch(function(error){
		var errorCode = error.code;
		console.log(errorCode);
		var errorMessage = error.Message;
		console.log(errorMessage);
	}).then(function(){
				fb.firebaseapp.auth().onAuthStateChanged(function(user){
					if(user){
						state.currentUser.uid =  fb.firebaseapp.auth().currentUser.uid; 
						console.log(state.currentUser.uid);
						state.currentUser.email = fb.firebaseapp.auth().currentUser.email;
						console.log(state.currentUser.email);
					} else{
						//nothing happens
					}
				}
				
	})
		
	}
}