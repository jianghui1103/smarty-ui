/*
 * @Author: 江辉 jianghui@yit.com
 * @Date: 2022-08-18 22:55:59
 * @LastEditors: 江辉 jianghui@yit.com
 * @LastEditTime: 2022-08-18 22:57:30
 * @FilePath: /smarty-ui-vite/src/shims-vue.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
