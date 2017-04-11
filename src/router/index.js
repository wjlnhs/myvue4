import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
const mysite = r => require.ensure([], () => r(require('../page/mysite/mysite')), 'mysite')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/mysite',
      component: mysite,
    }
  ]
})
