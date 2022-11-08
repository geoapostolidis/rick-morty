import { createApp } from "vue";
import Antd from 'ant-design-vue';
import App from "./App.vue";
import router from "./router";
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import "./assets/main.css";

const app = createApp(App);

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'

export { axios }

app.use(router);
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.use(store)
app.use(Antd)
router.isReady().then(() => {
  app.mount('#app');
})
