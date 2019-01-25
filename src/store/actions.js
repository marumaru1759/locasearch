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
	}
}