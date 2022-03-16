/*
 * @Author: wangwei
 * @Date: 2022-03-14 15:29:21
 * @LastEditTime: 2022-03-14 15:56:14
 * @FilePath: babel.config.js
 */
const plugins = [];
// lazy load ant-design-vue
// if your use import on Demand, Use this code
plugins.push([
    'import',
    {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: true, // `style: true` 会加载 less 文件
    },
]);
module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins,
};
