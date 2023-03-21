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

:root {
    --his-background-color: #F0F1F1;
    
    --his-sidebar-background-color: #182537;
    --his-sidebar-expanded-width: 250px;
    --his-sidebar-collapsed-width: 50px;
}

main {
    min-height: 100vh;
    width: 100%;
}

#app {
    background-color: var(--his-background-color);
    min-height: fit-conten
}

.his-bg {
    background-color: var(--his-background-color);
}


</style>
