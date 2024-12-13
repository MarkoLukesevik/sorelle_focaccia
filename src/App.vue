<script setup>
import { ref, onMounted } from 'vue';

import AppHeader from './components/AppHeader.vue';
import Sidebar from './components/Sidebar.vue';
import Info from './components/Info.vue';
import Menu from './components/menu/Menu.vue';

const groups = [
    'sandwiches',
    'deserts', 
    'supplements',
    'allergens',
    'alcoholic',
    'softDrinks',
    'wine',
    'beer',
    'hotDrinks',
    'water'
];

const isSidebarOpen = ref(false);
const activeLink = ref('sandwiches');
const menuComponentRef = ref(null);
const app = ref(null);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
}

const handleLinkClick = (group) => {
    const foundGroup = menuComponentRef.value.$refs[group];
    if (foundGroup) {
        activeLink.value = group;
        toggleSidebar();
       
        if (window.innerWidth < 600) {
            const offset = (window.innerHeight * 15) / 100;
            app.value.scrollTo({
                top: foundGroup.offsetTop - offset,
                behavior: 'smooth',
            })
        } else {
            foundGroup.scrollIntoView({ behavior: 'smooth',  block: 'start' });
        }

    }
}

const checkActiveLink = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    groups.forEach((group) => {
        const element = menuComponentRef.value.$refs[group];
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= scrollPosition && rect.bottom > scrollPosition) {
                activeLink.value = group;
            }
        }
    });
};

onMounted(() => {
    if (menuComponentRef.value.$refs.menuItems) {
        app.value.addEventListener('scroll', checkActiveLink);
        menuComponentRef.value.$refs.menuItems.addEventListener('scroll', checkActiveLink);
    }
    checkActiveLink();
});
</script>

<template>
    <div ref="app" class="app">
        <app-header @toggle-sidebar="toggleSidebar" />
        <div class="app-content__wrapper">
            <sidebar
                :shouldOpen="isSidebarOpen"
                :active-link="activeLink"
                @toggle-sidebar="toggleSidebar"
                @handle-link-click="handleLinkClick($event)"
            />
            <Menu ref="menuComponentRef" />
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

    margin-top: 10vh;
    margin-top: 10dvh;
}

@media (min-width: 600px) {
    .app-content__wrapper {
        height: 70vh;
        height: 70dvh;

        margin: 20px 0;

        overflow-y: auto;
    }
}
</style>