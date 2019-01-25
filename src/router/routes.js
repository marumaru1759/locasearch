import CustomeWel from '@/components/CustomeWel'
import UserCreate from '@/components/UserCreate'
import UserList from '@/components/UserList'
import LoginView from '@/components/LoginView'
import Mypage from '@/components/MyPage'


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
	component: Mypage,
	meta: { requiresAuth: true }
},{
	path: '*',
	redirect: '/'
}]
