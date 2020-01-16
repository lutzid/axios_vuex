import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Success from '@/components/Success'
import Fail from '@/components/Fail'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Success',
      name: 'Success',
      component: Success
    },
    {
      path: '/Fail',
      name: 'Fail',
      component: Fail
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    }
  ]
})
