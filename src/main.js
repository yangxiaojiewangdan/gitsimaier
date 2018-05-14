// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/iconf/iconfont.css'
import axios from 'axios';
import qs from 'qs'
import vuex from 'vuex'

//url全局变量
import global_ from './components/Global'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
//引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
Vue.use(vuex);
Vue.config.productionTip = false
/* eslint-disable no-new */
const store = new vuex.Store({//store对象
   state:{
		orderNum: 0,
	}//cart: [],
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
