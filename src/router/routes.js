import CustomeWel from '@/components/CustomeWel'
import UserCreate from '@/components/UserCreate'
import UserList from '@/components/UserList'
import LoginView from '@/components/LoginView'
import MyPage from '@/components/MyPage'
import store from '../store'


export default [{
	path: '/',
	component: CustomeWel
},{
	path: '/register',
	component: UserCreate
},{
	path: '/users',
	component: UserList
},{
	path: '/login',
	component: LoginView
},{
	path: '/Mypage',
	component: MyPage,
	//meta: { requiresAuth: true }
},{
	path: '/logout',
	beforeEnter: function(to, from, next){
		this.$store.dispatch('logout')
		next('/')
	}
},{
	path: '*',
	redirect: '/'
}]
