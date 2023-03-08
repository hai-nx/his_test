<template>
    <main>
        <h1>Home page...</h1>
        <button class="btn btn-outline-primary">
            <router-link :to="{ name: 'login' }">Đăng nhập</router-link>
        </button>
    </main>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
       return {}
    }
}
</script>

<style>
    
</style>