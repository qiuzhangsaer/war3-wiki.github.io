import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import {createPinia} from 'pinia';
import '@/assets/style/index.less';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(TDesign);
app.mount('#app');