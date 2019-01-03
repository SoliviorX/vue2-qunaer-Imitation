import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
/* ES6中键和值一样时，写一个就可以，比如下面的router等价于router:router */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})