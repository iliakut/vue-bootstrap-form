import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Step1',
      component: () => import('./views/Step1.vue')
    },
    {
      path: '/Step2',
      name: 'step2',
      component: () => import('./views/Step2.vue')
    },
    {
      path: '/Step3',
      name: 'step3',
      component: () => import('./views/Step3.vue')
    }
  ]
})
