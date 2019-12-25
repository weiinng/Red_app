import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'


import $http from '@/zhouWei-request/requestConfig';
Vue.prototype.$http = $http;



const app = new Vue({
    ...App
})
app.$mount()
