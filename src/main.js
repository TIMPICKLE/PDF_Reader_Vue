//导入vue
import Vue from 'vue'
//导入 app.vue 组件
import App from './App.vue'

//表示引入全局样式
import './assets/css/common.css'
//这是page1的样式
import "./assets/css/page1.css"
//接下来导入UI组件库
import ElementUI from 'element-ui';
//再导入 此库的css样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from './router/index.js';

import axios from 'axios'

//不显示 生产提示信息
Vue.config.productionTip = false

//挂载到Vue对象上 那么以后所有的Vue对象都可以通过$annotator来访问 js代码了
//这边导入的是annotator的库 已经挂载到实例 后期不用删掉即可
//import app from '../src/annotator_test/annotator_test'
//Vue.prototype.$annotator  = app;
//已经把此库注释  项目中不再运行

// Vuex 的 数据  这边挂载到Vue实例上
import store from '../src/annotator_test/getText';

import './registerServiceWorker'
Vue.prototype.$store = store

new Vue({
  //利用render函数 渲染app.vue组件 到 容器中 
  render: h => h(App),
  //这边开始注册路由
  router,
  //注册Vuex
  store
}).$mount('#app')
//表示挂载一个  id 为 app 的容器 可以 改为  el“#app”


