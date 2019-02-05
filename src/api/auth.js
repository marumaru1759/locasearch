import * as fb from './firebase'


export default {
	login(authInfo){
		fb.firebaseapp.auth().signInWithEmailAndPassword(authInfo.email, authInfo.password).catch(function(error){
		var errorCode = error.code;
		console.log(errorCode);
		var errorMessage = error.Message;
		console.log(errorMessage);
	})
	}
}



