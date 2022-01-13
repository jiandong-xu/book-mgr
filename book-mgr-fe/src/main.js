import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Spacebetween from './components/SpaceBetween/index.vue'
import FlexEnd from './components/FlexEnd/index.vue'

createApp(App)
.use(store)
.use(router) 
.use(Antd)
.component('space-between',Spacebetween)
.component('flex-end',FlexEnd)
.mount('#app');
