/*
 * @Author: wangwei
 * @Date: 2022-03-14 15:52:12
 * @LastEditTime: 2022-03-15 10:17:34
 * @FilePath: .eslintrc.js
 */
/* eslint-disable */
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],
    rules: {
        'vue/no-multiple-template-root': 'off',
        'no-console': 'off',
        'no-debugger': 'off',
        'no-mixed-operators': 0,
        'no-parsing-error': 'off',
        'no-control-regex': 0,
        'no-tabs': 0,
        'no-underscore-dangle': 0,
        'no-delete-var': 2,
        'no-unused-vars': 'off',
        'no-unused-expressions': 'off',
        'no-param-reassign': 'off',
        'no-empty-function': 0,
        'no-void': 0,
        eqeqeq: 0,
        'no-plusplus': 0,
        'no-prototype-builtins': 0,
        'no-restricted-syntax': 0,
        'no-extra-boolean-cast': 'off',
        'generator-star-spacing': 'off',
        indent: 0,
        camelcase: 'off',
        'vue/max-attributes-per-line': 0,
        'vue/attribute-hyphenation': 0,
        'vue/html-self-closing': 0,
        'vue/component-name-in-template-casing': 0,
        'vue/html-closing-bracket-spacing': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/no-unused-components': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/no-use-v-if-with-v-for': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/no-parsing-error': 0,
        'vue/require-default-prop': 0,
        'vue/require-prop-types': 0,
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        semi: 0,
        'prefer-const': [
            2,
            {
                ignoreReadBeforeAssign: false
            }
        ],
        'consistent-return': 'off',
        'max-len': 'off',
        'no-continue': 0,
        'linebreak-style': 'off',
        'default-case': 0,
        radix: 0,
        'template-curly-spacing': 'off',
        'prefer-destructuring': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
/* eslint-enable */
