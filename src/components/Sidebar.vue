<template>
    <aside :class="`${ is_expanded && 'is-expanded' }`">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle btn btn-sm btn-outline-light border-0" @click="handleToggleMenu">
                <i class="bi bi-chevron-double-right"></i>
            </button>
        </div>

        <div>
            <ul class="list-unstyled ps-0">
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            <i class="bi bi-chevron-double-right"></i>
                            Home
                        </button>
                        <div class="collapse show" id="home-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Updates</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Dashboard
                        </button>
                        <div class="collapse" id="dashboard-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Weekly</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Monthly</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Annually</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Orders
                        </button>
                        <div class="collapse" id="orders-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">New</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Processed</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Shipped</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="border-top my-3"></li>
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Account
                        </button>
                        <div class="collapse" id="account-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">New...</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Profile</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Settings</a></li>
                                <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Sign out</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
        </div>
        
    </aside>
</template>

<script>
// import { ref } from 'vue'
// const is_expanded = ref(false)

export default {
    name: 'VSidebar',
    data() {
        return {
            is_expanded: true
        }
    },
    methods: {
        handleToggleMenu(){
            this.is_expanded = !this.is_expanded;
            console.log(this.is_expanded)
        }
    },
}
</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: #333;
    color: #eee;

    transition: 0.2s ease-out;
}

.logo{
    margin-bottom: 1rem;
}

.logo > img {
    width: 2rem;
}

.menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0,2s ease-out;
}

.menu-toggle-wrap > .menu-toggle {
    transition: 0,2s ease-out;
}

.menu {
    margin: 0 -1rem;
}

.is-expanded {
    width: 280px;
}

.is-expanded > .menu-toggle-wrap {
    top: -3rem;
}

.is-expanded > .menu-toggle-wrap > .menu-toggle {
    transform: rotate(-180deg);
}

/* @media (max-width: 768px) {
    aside {
        position: fixed;
        z-index: 99;
    }
} */


</style>