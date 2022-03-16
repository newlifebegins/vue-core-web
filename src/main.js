/*
 * @Author: wangwei
 * @Date: 2022-03-14 15:29:21
 * @LastEditTime: 2022-03-14 20:33:54
 * @FilePath: main.js
 */
import { createApp } from 'vue';
import { setupAntd } from './libs/antd';
import App from './App.vue';
const app = createApp(App);
setupAntd(app);
app.mount('#app');
