import './assets/main.css'
import './input.css'; 
import router from './router/index.js'

import { createApp } from 'vue'
import App from './App.vue'
import Store from '@/store/index.js'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

createApp(App).use(router).use(VueSweetalert2).use(LoadingPlugin).use(Store).mount('#app')
