import Vue from 'vue'
import Router from 'vue-router'
import CustomeWel from '@/components/CustomeWel'
import UserCreate from '@/components/UserCreate'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CustomeWel',
      component: CustomeWel 
    },
    {
    	path: '/register',
    	name: 'register',
    	component: UserCreate
    }
  ]
})
