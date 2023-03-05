import { defineAsyncComponent } from 'vue'
import { LAYOUT_AUTH, LAYOUT_DEFAULT } from '../constants'

export function registerLayouts (app) {
    app.component(LAYOUT_AUTH, defineAsyncComponent(() => import('../layouts/Auth.vue')));
    app.component(LAYOUT_DEFAULT, defineAsyncComponent(() => import('../layouts/Default.vue')));
}