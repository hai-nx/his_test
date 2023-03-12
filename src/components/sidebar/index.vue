<template>
    <aside :class="`${ is_expanded && 'is-expanded' }`">
        <!--logo and toogle menu button-->
        <div class="sidebar_header">
            <!-- <img src="../../assets/logo.png" alt="logo"> -->

            <button class="sidebar_header_toggle menu-toggle btn border-0" @click="handleToggleMenu">
                <i class="bi bi-grid text-light"></i>
            </button>
        </div>

        <!--menu items-->


    </aside>
</template>

<script>
export default {
    name: 'VSidebar',
    data() {
        return {
            is_expanded: true
        }
    },
    methods: {
        handleToggleMenu() {
            this.is_expanded = !this.is_expanded;
        }
    }
}
</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: var(--his-sidebar-collapsed-width);
    min-height: 100vh;

    background-color: var(--his-sidebar-background-color);
    color: #eee;

    transition: 0.2s ease-out;
}

.is-expanded {
    width: var(--his-sidebar-expanded-width);
}

.sidebar_header {
    display: flex;
    justify-content: space-between;
    border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
    height: var(--his-sidebar-collapsed-width);
}

.sidebar_header_toggle {
    width: var(--his-sidebar-collapsed-width);
}

</style>