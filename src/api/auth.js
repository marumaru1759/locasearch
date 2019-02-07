import * as fb from './firebase'


export default {
/*	login(authInfo){
		console.log(authInfo.email);
		console.log(authInfo.password);
		fb.firebaseapp.auth().signInWithEmailAndPassword(authInfo.email, authInfo.password)
		.then(
				user => {
					this.uid = fb.firebaseapp.auth().currentUser.uid;
					this.email = fb.firebaseapp.auth().currentUser.email;
				},

				err => {
					alert(err.message);
				}

			)	
	}*/
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
	}
}




