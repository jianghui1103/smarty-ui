/*
 * @Author: 江辉 jianghui@yit.com
 * @Date: 2022-09-12 23:47:11
 * @LastEditors: 江辉 jianghui@yit.com
 * @LastEditTime: 2022-09-12 23:47:19
 * @FilePath: /smarty-ui-vite/.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports =   {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true
  },
  // 解析 .vue 文件
  parser: 'vue-eslint-parser', 
  extends: [
    'plugin:json/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser' // 解析 .ts 文件
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error'
  }
}