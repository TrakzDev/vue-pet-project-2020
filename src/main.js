import Vue from 'vue'
import App from './App.vue'
import i18n from './localization/localization'
import store from './store/store'
import router from "@/router/router";

new Vue({
  render: h => h(App),
  el: '#app',
  i18n,
  router,
  store
})
