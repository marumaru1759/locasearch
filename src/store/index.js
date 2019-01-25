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

	mutations: {
		//user registration
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
		}

		/*toggleRegistrationStatus (state, { id }) {
			const filtered = state.userData.filter(user => {
				return user.id === id
			})

			filtered.forEach(user => {
				user.done = !user.done
			})
		},*/
	},

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
		},
		login: ({ commit }, authInfo) => {
			return Auth.login(authInfo)
			.then(({ token, userId }) => {
			commit(types.AUTH_LOGIN, { token, userId })
			})
			.catch(err => { throw err })
		},
	}
})