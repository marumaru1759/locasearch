import * as fb from './firebase'


export default {
	login(authInfo){
		console.log(authInfo.email);
		console.log(authInfo.password);
		fb.firebaseapp.auth().signInWithEmailAndPassword(authInfo.email, authInfo.password).catch(function(error){
		var errorCode = error.code;
		var errorMessage = error.Message;
	}).then(function(){
				state.currentUser.uid =  fb.firebaseapp.auth().currentUser.uid; 
				console.log(state.currentUser.uid);
				state.currentUser.email = fb.firebaseapp.auth().currentUser.email;
				console.log(state.currentUser.email);
	})
		
}
}