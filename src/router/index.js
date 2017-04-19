import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../page/Admin'
import Hello from '@/components/Hello'
import Test from '../page/test'
import Login from '../page/Login'
import TestMap from '../page/testMap'
import Register from '../page/Register'
import yunLogin from '../page/yunLogin'
import List from '../page/List'
import Settings from '../page/settings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'yunLogin',
      component: yunLogin
    },{
    	path: '/Register',
      component: Register,
      name: 'Register'
    },{
          path: '/List',
          component: List,
          meta: {auth: true, title: "欢迎"}
    },{
          path: '/Settings',
          component: Settings,
          meta: {auth: true, title: "欢迎"}
    },{
      path: '/admin',
      component: Admin,
      children: [
        {
        path: '/Hello',
        component: Hello,
        meta: {auth: true, title: "欢迎"}
      },{
          path: '/Test',
          component: Test,
          meta: {auth: true, title: "欢迎"}
        },{
          path: '/TestMap',
          component: TestMap,
          meta: {auth: true, title: "欢迎"}
        },{
          path: '/Register',
          component: Register,
          meta: {auth: true, title: "欢迎"}
        }
      ]
    }
  ]
})
