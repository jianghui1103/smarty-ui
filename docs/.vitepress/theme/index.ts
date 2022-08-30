/*
 * @Author: 江辉 jianghui@yit.com
 * @Date: 2022-08-30 23:19:18
 * @LastEditors: 江辉 jianghui@yit.com
 * @LastEditTime: 2022-08-30 23:59:43
 * @FilePath: /smarty-ui-vite/docs/.vitepress/theme/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Theme from 'vitepress/dist/client/theme-default'
import SmartyUI from '../../../src/entry'

import 'vitepress-theme-demoblock/theme/styles/index.css'

import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export default {
  ...Theme,
  enhanceApp({app}) {
    app.use(SmartyUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
