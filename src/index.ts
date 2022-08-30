/*
 * @Author: 江辉 jianghui@yit.com
 * @Date: 2022-08-17 23:54:38
 * @LastEditors: 江辉 jianghui@yit.com
 * @LastEditTime: 2022-08-24 22:36:01
 * @FilePath: /smarty-ui-vite/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from './entry'

createApp({
  template: `
    <div>
      <SButton color="blue">蓝色按钮</SButton>
      <SButton color="green">绿色按钮</SButton>
      <SButton color="gray">灰色按钮</SButton>
      <SButton color="yellow">黄色按钮</SButton>
      <SButton color="red">红色按钮</SButton>
    </div>
    <div>
      <SButton color="blue" round plain icon="search" >蓝色按钮</SButton>
      <SButton color="green" round plain icon="edit" >绿色按钮</SButton>
      <SButton color="gray" round plain icon="check" >灰色按钮</SButton>
      <SButton color="yellow" round plain icon="message">黄色按钮</SButton>
      <SButton color="red" round plain icon="delete">红色按钮</SButton>
    </div>
  `
}).use(SmartyUI).mount('#app');