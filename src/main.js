import Vue from 'vue';
import App from './App.vue';
import FancyButton from './components/FancyButton';
// Global component
Vue.component('fancy-button', FancyButton);

new Vue({
  el: '#app',
  render: h => h(App)
})
