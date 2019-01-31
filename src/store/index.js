import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
	auth: {
		token: null,
		userId: null
	},
	board:{
		Lists: []
	},

	currentUser:[]
}


export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	strict: process.env.NODE_ENV !== 'production',

})	

	/*toggleRegistrationStatus (state, { id }) {
			const filtered = state.userData.filter(user => {
				return user.id === id
			})

			filtered.forEach(user => {
				user.done = !user.done
			})
		},*/

	


