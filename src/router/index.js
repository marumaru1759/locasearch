import Vue from 'vue'
import Router from 'vue-router'
import CustomeWel from '@/components/CustomeWel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CustomeWel',
      component: CustomeWel 
    }
  ]
})
