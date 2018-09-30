import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import backIndex from '@/components/backIndex'
import courseList from '@/components/courseList'
import couresEdit from '@/components/couresEdit'
import indexContent from '@/components/indexContent'
import andimList from '@/components/andimList'
import studentList from '@/components/studentList'
import Iview from '@/components/iview'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: 'Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Iview',
      component: Iview
    },
    {
      path:'/backIndex',
      name:'backIndex',
      component:backIndex,
      children:[
        {
           path:'courseList',//课程列表
           component:courseList
        },
        {
           path:'couresEdit',//编辑课程
           component:couresEdit
        },{
           path:'indexContent',//首页统计
           component:indexContent
        },{
           path:'andimList', //后台用户
           component:andimList
        },{
           path:'studentList',//学员用户
           component:studentList
        },{
           path:'*',//跳入其他空白页面同意跳入 indexContent页面
           redirect:'indexContent'
        }
      ]
    }
  ]
})
