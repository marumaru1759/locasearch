import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
	auth:{
		token: null,
		userId: null
	},
	board:{
		Lists: []
	}
}


export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	strict: process.env.NODE_ENV !== 'production',

	state: {
		userData: [
		{
			id:1,
			name: 'Takuya Tajima',
			password: '123456'
		},{
			id:2,
			name: 'Yohei Noda',
			password: '123456'
		}
		],
		nextUserId: 3,

	},

	/*toggleRegistrationStatus (state, { id }) {
			const filtered = state.userData.filter(user => {
				return user.id === id
			})

			filtered.forEach(user => {
				user.done = !user.done
			})
		},*/

	actions: {
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
		}
		
	}
})