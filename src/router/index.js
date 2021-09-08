//导入vue
import Vue from 'vue'
//这边使用路由  用于组件之间的跳转
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Testpage from '../views/Testpage.vue'
import Testpage2 from '../views/TestPage2.vue'
import ExportAnnotation from '../views/ExportAnnotation.vue'

export default new VueRouter({
    routes:[     
      {
        path:'/',
        component:Page2
      },
      {
        path:'/user',
        //默认页面  工作台worktable'
        component:Page1
      },
 
      {
        path:'/test',
        component:Testpage
      },
      {
        path:'/test2',
        component:Testpage2
      },
      {
        name:"ano",
        path:'/annotation',
        component:ExportAnnotation
      },
  
    ]
  });