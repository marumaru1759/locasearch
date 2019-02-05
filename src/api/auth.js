import * as fb from './firebase'


export default {
	login(authInfo){
		fb.firebaseapp.auth().signInWithEmailAndPassword(authInfo.email, authInfo.password).then( user => {
						state.currentUser.uid =  fb.firebaseapp.auth().currentUser.uid; 
						console.log(state.currentUser.uid);
						state.currentUser.email = fb.firebaseapp.auth().currentUser.email;
						console.log(state.currentUser.email);		
		})
	}
}