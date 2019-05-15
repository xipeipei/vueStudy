import "babel-polyfill"; // 兼容IE12以下部分Js方法不支持
import "./plugins/axios";
import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(ElementUI)
Vue.use(iView)
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
