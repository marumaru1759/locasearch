import * as types from './mutation-types'
import * as fb from '../api/firebase'

export default {
	[types.AUTH_LOGIN] (state, payload) {
		state.currentUser= payload
	},
	
	[types.AUTH_LOGOUT](state, payload){
		state.currentUser = payload
	}

}		
	

