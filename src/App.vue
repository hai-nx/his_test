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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
