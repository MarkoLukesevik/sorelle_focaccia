<script setup>
import { computed } from 'vue';

const props = defineProps(['shouldOpen', 'activeLink']);
const emit = defineEmits(['handle-link-click']);

const sidebarClasses = computed(() => {
    const classes = ['sidebar'];

    if (props.shouldOpen) classes.push('open-sidebar');

    return classes;
})

const activeLinkStyle = (link) => {
    console.log(props.activeLink, link)
    if (link === props.activeLink)
        return { color: '#be5f54' };
}
</script>

<template>
    <div :class="sidebarClasses">
        <div class="sidebar-logo"></div>
        <ul class="sidebar-links">
            <li :style="activeLinkStyle('sandwiches')" @click="emit('handle-link-click', 'sandwiches')">Фокача сендвичи</li>
            <li :style="activeLinkStyle('supplements')" @click="emit('handle-link-click', 'supplements')">Додатоци</li>
            <li :style="activeLinkStyle('deserts')" @click="emit('handle-link-click', 'deserts')">Десерти</li>
            <li :style="activeLinkStyle('alcoholic')" @click="emit('handle-link-click', 'alcoholic')">Алкохолни пијалоци</li>
            <li :style="activeLinkStyle('nonAlcoholic')" @click="emit('handle-link-click', 'nonAlcoholic')">Безалкохолни пијалоци</li>
            <li :style="activeLinkStyle('wine')" @click="emit('handle-link-click', 'wine')">Вино</li>
            <li :style="activeLinkStyle('beer')" @click="emit('handle-link-click', 'beer')">Пиво</li>
            <li :style="activeLinkStyle('hotDrinks')" @click="emit('handle-link-click', 'hotDrinks')">Топли напитоци</li>
            <li :style="activeLinkStyle('water')" @click="emit('handle-link-click', 'water')">Вода</li>
        </ul>
    </div>
</template>

<style scoped>
.sidebar{
    position: absolute;
    top: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    flex: 0 1 auto;
    align-items: center;

    transform: translateX(-100%);

    width: 100vw;
    width: 100dvw;

    background-color: #040205;
    padding: 3rem 1rem;

    transition: all 0.3s ease-out;
    z-index: 1;
}

.sidebar-links {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    row-gap: 1rem;

    color: #ffffff;
    padding-left: 2rem;
    list-style-type: none;

    font-size: 1.3rem;
}

.sidebar-links > li {
    cursor: pointer;
}

.open-sidebar {
    transform: translateX(0);
}

@media (min-width: 600px) {
    .sidebar {
        position: unset;
        display: flex;
        flex-direction: column;
        flex: 0 1 20%;

        transform: none;
        background-color: transparent;

        box-shadow: 6px 0px 12px -3px rgba(190, 95, 84, 0.75);
    }

    .sidebar-links {
        align-items: flex-start;
        justify-content: flex-start;

        color: #040205;
        font-size: 1rem;
    }

    .sidebar-logo {
        display: none;
    }
}
</style>