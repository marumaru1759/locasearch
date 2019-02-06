import * as types from './mutation-types'
import { Auth, List, Task } from '../api'

export default{
	login({ commit }, authInfo ) {
		console.log(authInfo.email);
		return Auth.login(authInfo)
		.then(({ uid, email }) => { 
			commit(types.AUTH_LOGIN, { uid, email} )
			console.log("success2");
		})
		.catch(err => { throw err })
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
		