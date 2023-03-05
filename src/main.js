import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerLayouts } from './utils'

const app = createApp(App);

registerLayouts(app);

app.use(router);
app.mount('#app');
