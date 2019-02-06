import * as fb from './firebase'


export default {
	login(authInfo){
		console.log(authInfo.email);
		console.log(authInfo.password);
		fb.firebaseapp.auth().signInWithEmailAndPassword(authInfo.email, authInfo.password);
	})
}




