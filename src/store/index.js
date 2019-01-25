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

	UserData:{
		id:1,
		name:"Taro",
		password:"Pass"
	},

	nextuserId:3
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

	


/*state: {
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

	},*/