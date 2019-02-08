import * as types from './mutation-types'
import { Auth, List, Task } from '../api'

export default{
	login({ commit }, authInfo ) {
		Auth.login(authInfo)
		.then(function onFulfilled({ uid, email }){
			console.log(uid);
			console.log(email);
			commit(types.AUTH_LOGIN, { uid, email })
		})
		.catch(function onRejected(error){
		 console.log("error");
		})
	},

	logout({ commit }){
		Auth.logout()
        .then(function onFulfilled({ uid, email }){
        	commit(types.AUTH_LOGOUT, { uid, email })
        })
        .catch(function onRejected(error){
        	console.log("error");
        })
	},

	userRegister({ commit }, { email, password }){
		return new Promise(function(resolve, reject){
			Auth.userRegister(email, password)
			.then(function onFulfilled({ uid, email }){
				console.log(uid);
				console.log(email);
				commit(types.AUTH_LOGIN, { uid, email })
			})
			.catch(function onRejected(error){
				console.log(error);
		})		

		}) 
	}


}	




		// restore state
/*	restore (state, { userData, nextUserId}){
			state.userData = userData
			state.nextUserId = nextUserId
		},


	//save "state" in local storage
	save ({ state }){
			const data ={
				userData: state.userData,
				nextUserId: state.nextUserId
			}
			localStorage.setItem('User-app-Data', JSON.stringify(data))
		},

		//resotore "state" from local storage
	restore({ commit }){
			const data = localStorage.getItem('User-app-Data')
			if(data){
				commit('restore', JSON.parse(data))
			}
		}*/
		