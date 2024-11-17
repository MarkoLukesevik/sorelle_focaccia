<script setup>
const emit = defineEmits(['toggle-sidebar']);
</script>

<template>
    <header class="header">
        <div class="header-content">
            <img
                class="header-content-hamburger"
                src="/assets/images/menu.png"
                @click="emit('toggle-sidebar')"
            />
            <img class="header-content-logo" src="/assets/images/logo-with-text.png" />
        </div>
        <div class="header-border"></div>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    background-color: #f6f2e9;

    display: flex;
    flex-direction: column;
    flex: 0 1 auto;

    width: 100%;
    height: 10vh;
    height: 10dvh;
}

.header-content {
    display: flex;
    flex-direction: row;
    flex: 0 1 auto;
    align-items: center;
    justify-content: center;

    height: 100%;
    padding: 0.4rem;
}

.header-content-hamburger {
    position: absolute;
    left: 0.8rem;
    z-index: 2;

    height: 25px;
}

.header-content-logo {
    height: 100%;
}

.header-border {
    position: absolute;
    bottom: -20px;

    width: 100%;
    height: 20px;
    background-image:  url(/assets/images/border.png);
    background-repeat: repeat
}

@media (min-width: 600px) {
    .header {
        position: relative;
    }

    .header-content-hamburger {
        display: none;
    }
}
</style>