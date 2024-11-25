import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import mk from './locales/mk.json';

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'mk',
    messages: {
        en,
        mk,
    },
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
