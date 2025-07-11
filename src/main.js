import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia';
import axios from 'axios';

const app= createApp(App);
const pinia = createPinia();
app.use(axios);
app.use(pinia);
app.use(router);

// Initialize auth state after Pinia and router are available
import { useAuthStore } from './stores/auth';
const authStore = useAuthStore();
authStore.initializeAuth();

app.mount('#app');
