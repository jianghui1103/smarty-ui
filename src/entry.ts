/*
 * @Author: 江辉 jianghui@yit.com
 * @Date: 2022-08-22 23:43:37
 * @LastEditors: 江辉 jianghui@yit.com
 * @LastEditTime: 2022-08-23 23:40:53
 * @FilePath: /smarty-ui-vite/src/entry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue';
import MyButton from './Button.vue'
import JSXButton from './JSXButton'
import SButton from './button/index'

export { MyButton, JSXButton, SButton}

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SButton.name, SButton);
  }
}