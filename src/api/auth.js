import * as fb from './firebase'


export default {
	login: fb.firebaseapp.auth().signInWithEmailAndPasswor(authInfo).catch(function(error){
		var errorCode = error.code;
		var errorMessage = error.Message;
	}).then(function(){
				state.currentUser.uid =  fb.firebaseapp.auth().currentUser.uid; 
				console.log(state.currentUser.uid);
				state.currentUser.email = fb.firebaseapp.auth().currentUser.email;
				console.log(state.currentUser.email);
	})
		
}