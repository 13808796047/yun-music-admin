import { createApp } from 'vue'
import App from './App.vue'
import { Quasar,Notify } from 'quasar'
import router from './router'
import store from "./store";
import './permission.js'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
const myApp = createApp(App)
myApp.use(router)
myApp.use(store)
myApp.use(Quasar, {
  plugins: {
    Notify
  }, // import Quasar plugins and add here
})
myApp.mount('#app')
