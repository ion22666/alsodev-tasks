import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';

export const base = process.env.NODE_ENV === 'production' ? '/alsodev-tasks' : '';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
