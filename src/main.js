import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './components/app.vue'

Vue.use(ElementUI);

new Vue({
  el: '#appIndex',
  render: h => h(App)
})