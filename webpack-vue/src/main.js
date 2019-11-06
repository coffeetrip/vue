import Vue from 'vue'  // django랑 순서가 다름
// const Vue = require('vue')

import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')


// 같은 코드(마운트 시킨다.)
//const app = new Vue({
//  el: '#app'
//})