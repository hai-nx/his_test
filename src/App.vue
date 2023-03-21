<template>
    <component :is="layout">
        <router-view/>
    </component>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { LAYOUT_DEFAULT } from './constants'


export default {
    name: 'App',
    setup() {
        const route = useRoute();
        return {
            layout: computed(() => route.meta.layout || LAYOUT_DEFAULT)
        }
    }
}
</script>

<style>
main {
    min-height: 100vh;
    width: 100%;
}

#app {
    background-color: #F8F9F9;
    height: 100vh;
}


</style>
