import CustomeWel from '@/components/CustomeWel'
import UserCreate from '@/components/UserCreate'


export default [{
	path: '/',
	component: CustomeWel
},{
	path: '/register',
	component: UserCreate
},{
	path: '*',
	redirect: '/'
}]
