<template>
    <div class="app">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout',
    components: {
    },
}
</script>

<style scoped>
.app {
    display: flex;
}

</style>