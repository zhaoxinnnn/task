import Vue from 'vue'
import App from './app.vue'

Vue.config.debug = true; // 开启错误提示
Vue.http.options.emulateHTTP = true;
new Vue({
  el: '#appIndex',
  render: h => h(App)
})
