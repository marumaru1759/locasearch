import CustomeWel from '@/components/CustomeWel'
import UserCreate from '@/components/UserCreate'
import UserList from '@/components/UserList'


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
	path: '*',
	redirect: '/'
}]
