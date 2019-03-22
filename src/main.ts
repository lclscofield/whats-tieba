import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/global.scss'
import initCsrf from './api/initCsrf'

Vue.config.productionTip = false

initCsrf().then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
