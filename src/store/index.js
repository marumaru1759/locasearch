import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	getters,
	actions,
	mutations,
	strict: process.env.NODE_ENV !== 'production',

	state: {
		userData: [
		{
			id:1,
			name: 'Takuya Tajima',
			Password: '123456'
		},{
			id:2,
			name: 'Yohei Noda',
			Password: '123456'
		}
		],
		nextUserId: 3,

	},

	mutations: {
		//user registration
		userRegister (state, { name }){
			state.userData.push({
				id: state.nextUserId,
				name,
				done: false
			})
			state.nextTaskId++
		},

		toggleRegistrationStatus (state, { id }) {
			const filtered = state.userData.filter(user => {
				return user.id === id
			})

			filtered.forEach(user => {
				user.done = !user.done
			})
		},
	},
})