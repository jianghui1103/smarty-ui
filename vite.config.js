/*
 * @Author: 江辉 jianghui@yit.com
 * @Date: 2022-08-18 00:31:37
 * @LastEditors: 江辉 jianghui@yit.com
 * @LastEditTime: 2022-08-24 22:38:05
 * @FilePath: /smarty-ui-vite/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'vue'
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    Unocss()
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,   // 追加
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      formats: ["esm", "umd","iife"],
    }
  }
})