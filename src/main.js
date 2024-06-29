import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import TDesign from 'tdesign-vue-next';
import {createPinia} from 'pinia';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(TDesign);
app.mount('#app');