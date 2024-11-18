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
    if (link === props.activeLink)
        return { color: '#c7473c' };
}
</script>

<template>
    <div :class="sidebarClasses">
        <div class="sidebar-border"></div>
        <div class="sidebar-logo"></div>
        <ul class="sidebar-links">
            <li :style="activeLinkStyle('sandwiches')" @click="emit('handle-link-click', 'sandwiches')">{{ $t("focacciaSandwiches") }}</li>
            <li :style="activeLinkStyle('supplements')" @click="emit('handle-link-click', 'supplements')">{{ $t("sauces") }}</li>
            <li :style="activeLinkStyle('deserts')" @click="emit('handle-link-click', 'deserts')">{{ $t("deserts") }}</li>
            <li :style="activeLinkStyle('allergens')" @click="emit('handle-link-click', 'allergens')">{{ $t("allergens") }}</li>
            <li :style="activeLinkStyle('alcoholic')" @click="emit('handle-link-click', 'alcoholic')">{{ $t("alcoholicBeverages") }}</li>
            <li :style="activeLinkStyle('softDrinks')" @click="emit('handle-link-click', 'softDrinks')">{{ $t("softDrinks") }}</li>
            <li :style="activeLinkStyle('wine')" @click="emit('handle-link-click', 'wine')">{{ $t("wine") }}</li>
            <li :style="activeLinkStyle('beer')" @click="emit('handle-link-click', 'beer')">{{ $t("beer") }}</li>
            <li :style="activeLinkStyle('hotDrinks')" @click="emit('handle-link-click', 'hotDrinks')">{{ $t("hotDrinks") }}</li>
            <li :style="activeLinkStyle('water')" @click="emit('handle-link-click', 'water')">{{ $t("water") }}</li>
        </ul>
    </div>
</template>

<style scoped>
.sidebar{
    position: fixed;
    top: 9vh;
    top: 9dvh;
    bottom: 0;

    display: flex;
    flex-direction: column;
    flex: 0 1 auto;
    align-items: center;

    transform: translateX(-100%);

    width: 100vw;
    width: 100dvw;

    background: linear-gradient(to bottom, #f6f2e9, #83837b);
    padding: 5rem 1rem;

    transition: all 0.3s ease-out;
    z-index: 1;
}

.sidebar-links {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    align-items: center;
    row-gap: 1rem;

    color: #040205;
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
    position: relative;
    top: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    flex: 0 1 200px;

    transform: none;
    background: transparent;
    padding: 0;
}

.sidebar-border {
    position: absolute;
    right: -10px;
    top: 0;
    bottom: 0;

    width: 20px;
    background-image:  url(/assets/images/border.png);
    background-repeat: repeat
}

.sidebar-links {
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 2.4rem 1rem;

    font-size: 0.9rem;
}

.sidebar-logo {
    display: none;
}
}

@media (min-width: 768px) {
    .sidebar {
        flex: 0 1 235px;
    }

    .sidebar-links {
        font-size: 1rem;
    }
}
</style>