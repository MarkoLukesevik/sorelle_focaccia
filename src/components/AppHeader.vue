<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const emit = defineEmits(['toggle-sidebar']);

const { locale } = useI18n();

const isMk = ref(locale.value === 'mk');

const handleChange = () => {
    const lang = isMk.value ? 'mk' : 'en';
    locale.value = lang
    localStorage.setItem('lang', lang);
};
</script>

<template>
    <header class="header">
        <div class="header-content">
            <img
                class="header-content-hamburger"
                src="/assets/images/menu.png"
                alt=""
                @click="emit('toggle-sidebar')"
            />
            <img class="header-content-logo" src="/assets/images/logo-with-text.png" alt="" />
            <div class="header-content__lang-toggle">
                <input type="checkbox" v-model="isMk" class="check" @change="handleChange" />
            </div>
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

.header-content__lang-toggle {
    position: absolute;
    right: 0.8rem;

    display: flex;
    flex-direction: row;
    flex: 0 1 auto;
    align-items: center;
    column-gap: 0.2rem;
    font-size: 0.9rem;
}

.check {
    position: relative;
    width: 50px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

.check::before {
    position: absolute;
    content: '';
    width: 45px;
    height: 20px;
    background-color: #e5c19f;
    border-radius: 25px;
}

.check::after {
    content: '';
    position: absolute;
    left: 0;
    
    width: 25px;
    height: 20px;
    background-image: url('/assets/images/en-flag.png');
    background-size: cover;
    background-position: center;

    border-radius: 25px;
    transition: 0.25s;
    box-sizing: border-box;
}

.check:checked::after {
    content: '';
    background-image: url('/assets/images/mk-flag.png');
    left: 20px;
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