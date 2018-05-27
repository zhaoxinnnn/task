import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    // , {
    //   path: '/hi',
    //   component: Hi,
    //   children: [
    //     { path: '/', component: Hi },
    //     { path: 'hi1', component: Hi1 },
    //     { path: 'hi2', component: Hi2 }
    //   ]
    // }
  ]
})
