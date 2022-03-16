/*
 * @Author: wangwei
 * @Date: 2022-03-15 10:22:16
 * @LastEditTime: 2022-03-15 10:33:20
 * @FilePath: .browserslistrc.js
 */
module.exports = {
    plugins: [
        require('autoprefixer')({ overrideBrowserslist: ['> 0.15% in CN'] }), // 自动添加css前缀
    ],
};
