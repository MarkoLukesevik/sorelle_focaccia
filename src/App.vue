<script setup>
import { ref, onMounted } from 'vue';

import AppHeader from './components/AppHeader.vue';
import Sidebar from './components/Sidebar.vue';
import Info from './components/Info.vue';
import Products from './components/products/Products.vue';

const groups = ['alcoholic', 'nonAlcoholic', 'wine', 'beer', 'hotDrinks', 'water'];

const isSidebarOpen = ref(false);
const activeLink = ref('sandwiches');
const productsComponentRef = ref(null);

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

const checkActiveLink = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    groups.forEach((group) => {
        const element = productsComponentRef.value.$refs[group];
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= scrollPosition && rect.bottom > scrollPosition) {
                activeLink.value = group;
            }
        }
    });
};

onMounted(() => {
    if (productsComponentRef.value.$refs.products) {
        productsComponentRef.value.$refs.products.addEventListener('scroll', checkActiveLink);
    }
    checkActiveLink();
});
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
            <Products ref="productsComponentRef" />
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

    overflow-y: auto;
}

.app::-webkit-scrollbar {
    display: none;
}

.app-content__wrapper {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
}

@media (min-width: 600px) {
    .app-content__wrapper {
        height: 70vh;
        height: 70dvh;
        overflow-y: auto;
    }
}
</style>