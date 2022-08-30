/*
 * @Author: 江辉 jianghui@yit.com
 * @Date: 2022-08-24 23:36:37
 * @LastEditors: 江辉 jianghui@yit.com
 * @LastEditTime: 2022-08-24 23:42:09
 * @FilePath: /smarty-ui-vite/docs/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from '../config/unocss'

export default defineConfig({
  plugins: [
    vueJsx(),
    Unocss()
  ]
})