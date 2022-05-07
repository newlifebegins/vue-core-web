/*
 * @Author: wangwei
 * @Date: 2022-03-14 15:29:21
 * @LastEditTime: 2022-03-22 17:59:36
 * @FilePath: main.js
 */
import { createApp } from 'vue';
import { setupAntd } from './libs/antd';
import router, { setupRouter } from './router';
import App from './App.vue';
const app = createApp(App);
setupAntd(app);
// 挂载路由
setupRouter(app);
// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'));
