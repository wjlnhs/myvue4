import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/msite',
      component: msite,
    }
  ]
})
