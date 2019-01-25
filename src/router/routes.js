import CustomeWel from '@/components/CustomeWel'
import UserCreate from '@/components/UserCreate'
import UserList from '@/components/UserList'
import Login from '@/components/Login'
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
	component: Login
},{
	path: '/Mypage',
	component: Mypage,
	meta: { requiresAuth: true }
},{
	path: '*',
	redirect: '/'
}]
