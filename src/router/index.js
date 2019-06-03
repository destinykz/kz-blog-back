import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: ()=>import('@/components/Login')
    },
    {
      path:"/admin",
      name:'admin',
      component:()=>import('@/components/Admin'),
      children:[
        {
          path: 'articleAdd',
          name: 'article/articleAdd',
          component: ()=>import('@/components/article/articleAdd')
        },
        {
          path: 'articleList',
          name: 'article/articleList',
          component: ()=>import('@/components/article/articleList')
        }
      ]
    }
  ]
})
