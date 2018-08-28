import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import lazyLoading from './lazyLoading'
import moment from 'moment'
import store from '../store'
import DataService from '@/services/DataService'

Vue.use(Router)
/* eslint-disable */
const EmptyParentComponent = {
  template: '<router-view></router-view>',
}
/* eslint-enable */
export default new Router({
  routes: [
    {
      name: 'setDate',
      path: '/setDay/:date',
      beforeEnter: (to, from, next) => {
        store.commit('setLoading', false)
        if (to.params.date) {
          let d = moment(to.params.date)
          store.commit('changeDay', d)
          store.commit('changeGamePk', '')
          DataService.getData()
            .then(() => {
              next('dashboard')
            })
        } else {
          next(false)
        }
      }
    },
    {
      name: 'setGamePk',
      path: '/setGamePk/:gamepk',
      beforeEnter: (to, from, next) => {
        store.commit('setLoading', false)
        if (to.params.gamepk) {
          store.commit('changeGamePk', to.params.gamepk)
          DataService.getData()
            .then(() => {
              next('tracker')
            })
        } else {
          next(false)
        }
      }
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: lazyLoading('auth/login/Login'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: lazyLoading('auth/signup/Signup'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      path: '/404',
      component: lazyLoading('pages/404-pages/VuesticPageNotFoundSimple'),
      alias: ['*', '/admin']
    },
    {
      name: 'Trackers',
      path: '/',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: lazyLoading('dashboard/Dashboard'),
          default: true,
          props: true
        },
        {
          name: 'tracker',
          path: 'tracker',
          component: lazyLoading('tracker/Tracker'),
          props: true
        },
        {
          name: 'schedule',
          path: 'schedule',
          component: lazyLoading('schedule/Schedule'),
          props: true
        }
      ],
    },
  ],
})
