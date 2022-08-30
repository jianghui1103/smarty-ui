/*
 * @Author: 江辉 jianghui@yit.com
 * @Date: 2022-08-18 00:18:11
 * @LastEditors: 江辉 jianghui@yit.com
 * @LastEditTime: 2022-08-24 22:21:09
 * @FilePath: /smarty-ui-vite/src/button/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink';

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue'
  },
  icon: {
    type: String,
    default: ''
  }
}


export default defineComponent({
  name: 'SButton',
  props,
  setup(props, {slots}) {
    return ()=> <button
      class={`
        py-2 
        px-4 
        font-semibold 
        rounded-lg 
        shadow-md 
        text-white 
        bg-${props.color}-500 
        hover:bg-${props.color}-700 
        border-none 
        cursor-pointer
        m-1
        `}
    >
      { props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
      {slots.default ? slots.default() : ''}
    </button>
  }
  
})