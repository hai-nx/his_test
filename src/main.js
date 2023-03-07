import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerLayouts } from './utils'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App);

registerLayouts(app);

app.use(router);
app.mount('#app');
