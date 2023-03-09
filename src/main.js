import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { registerLayouts } from './utils'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App);

registerLayouts(app);
app.use(store)
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
