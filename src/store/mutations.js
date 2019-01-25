import * as types from './mutation-types'

export default {
	[types.AUTH_LOGIN] (state, payload) {
		state.auth = payload
	},

	userRegister (state, { name, password }){
			state.userData.push({
				id: state.nextUserId,
				name,
				password,
				//done: false
			})
			state.nextUserId++
		},
}

