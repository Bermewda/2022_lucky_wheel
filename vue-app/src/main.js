import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import service from './service'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$service = service

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
