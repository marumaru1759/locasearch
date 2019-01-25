import * as types from './mutation-types'
import { Auth, List, Task } from '../api'

export default{
	login: ({ commit }, authInfo) => {
		return Auth.login(authInfo)
		.then(({ token, userId }) => {
			commit(types.AUTH_LOGIN, { token, userId })
		})
		.catch(err => { throw err })
	},
}