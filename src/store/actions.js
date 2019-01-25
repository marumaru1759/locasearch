import * as types from './mutation-types'
import { Auth, List, Task } from '../api'

export default{
	userRegister (state, { name, password }){
			state.userData.push({
				id: state.nextUserId,
				name,
				password,
				//done: false
			})
			state.nextUserd++
		},

		// restore state
	restore (state, { userData, nextUserId}){
			state.userData = userData
			state.nextUserId = nextUserId
		},

	login: ({ commit }, authInfo) => {
		return Auth.login(authInfo)
		.then(({ token, userId }) => {
			commit(types.AUTH_LOGIN, { token, userId })
		})
		.catch(err => { throw err })
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
	/*restore({ commit }){
			const data = localStorage.getItem('User-app-Data')
			if(data){
				commit('restore', JSON.parse(data))
			}
		}*/
		
	}