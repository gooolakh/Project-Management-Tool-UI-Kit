import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/components/SignUp'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },{
      path: '/Header',
      name: 'Header',
      component: Header
    }
  ]
})
