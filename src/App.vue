<script setup>
import { ref } from 'vue';

import AppHeader from './components/AppHeader.vue';
import Sidebar from './components/Sidebar.vue';
import Info from './components/Info.vue';
import Products from './components/products/Products.vue';

const isSidebarOpen = ref(false);
const activeLink = ref('sandwiches');

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
}

const handleLinkClick = (section) => {
    const foundSection = document.getElementById(section);

    if (foundSection) {
        activeLink.value = section;
        toggleSidebar();
        foundSection.scrollIntoView({ behavior: 'smooth',  block: 'start' });
    }
}

</script>

<template>
    <div class="app">
        <app-header @toggle-sidebar="toggleSidebar" />
        <div class="app-content__wrapper">
            <sidebar
                :shouldOpen="isSidebarOpen"
                :active-link="activeLink"
                @toggle-sidebar="toggleSidebar"
                @handle-link-click="handleLinkClick($event)"
            />
            <Products />
        </div>
        <info />
    </div>
</template>

<style scoped>
.app {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
}

.app-content__wrapper {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
   
    overflow-y: auto;
}

.app-content__wrapper::-webkit-scrollbar {
    display: none;
}

@media (min-width: 768px) {
    .app-content__wrapper {
        height: 70vh;
        height: 70dvh;
        overflow-y: unset;
    }
}
</style>