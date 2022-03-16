<!--
 * @Author: wangwei
 * @Date: 2022-03-14 15:29:21
 * @LastEditTime: 2022-03-15 18:59:39
 * @FilePath: App.vue
-->
<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <a-button type="primary">Primary Button</a-button>
    <Print msg="Welcome to Your Vue.js App" />
    <a-date-picker :showToday="false" />
</template>

<script>
import Print from './components/Print.vue';

export default {
    name: 'App',
    components: {
        Print,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
