<script setup>
const props = defineProps(['menuItem']);
</script>

<template>
    <div class="menu-item">
       <div class="menu-item-image-wrapper">
            <img v-if="menuItem.image" class="menu-item-image" :src="menuItem.image" />
       </div>
       <div class="menu-item-name">
            <p>{{ $t(menuItem.name) }}</p>
            <span v-if="menuItem.description">{{ $t(menuItem.description) }}</span>
       </div>
       <div class="menu-item-price">{{ menuItem.price }} {{ $t("mkd") }}</div>
    </div>
</template>

<style scoped>
.menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 0.5rem;

    width: 100%;
}

.menu-item-image-wrapper {
    display: flex;
    flex: 0 1 auto;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1/1;
    background-color: #83837b0f;
    border-radius: 50%;
    
    padding: 0.8rem;
    height: 60px;
}

.menu-item-image {
    height: 100%;
}

.menu-item-name {
    flex: 0 1 60%;
}

.menu-item-name > p {
    color: #5b6b40;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
}

.menu-item-name > span {
    color: #040205;
    font-size: 0.7rem;
    word-break: normal;
}

.menu-item-price {
    color: #040205;
    font-size: 0.9rem;
    font-weight: 600;
}

@media (min-width: 600px) {
    .menu-item {
        column-gap: 1rem;
    }

    .menu-item-image-wrapper {
        height: 75px;
    }

    .menu-item-name {
        flex: 0 1 45%;
    }
}

@media (min-width: 768px) {
    .menu-item-image-wrapper {
        height: 100px;
    }

    .menu-item-name > p {
        font-size: 1rem;
    }

    .menu-item-price > span {
        font-size: 1rem;
    }
}
</style>