/*
 * @Author: wangwei
 * @Date: 2022-03-14 15:56:43
 * @LastEditTime: 2022-03-14 16:22:28
 * @FilePath: .prettierrc.js
 */
module.exports = {
    printWidth: 120, // 超过最大值换行
    tabWidth: 4,
    semi: true, // 使用分号, 默认true
    singleQuote: true, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    trailingComma: 'all', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
    bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    jsxBracketSameLine: false,
    arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    requirePragma: false,
    proseWrap: 'preserve',
};
