/*
 * @Description: global.d.ts
 * @Date: 2021-07-07 11:55:40
 * @Author: LeiLiu
 */
import { ApiType } from '../preload';

declare global {
  declare module '*.bmp' {
    const src: string;
    export default src;
  }

  declare module '*.gif' {
    const src: string;
    export default src;
  }

  declare module '*.jpg' {
    const src: string;
    export default src;
  }

  declare module '*.jpeg' {
    const src: string;
    export default src;
  }

  declare module '*.png' {
    const src: string;
    export default src;
  }

  declare module '*.webp' {
    const src: string;
    export default src;
  }

  declare type Func = (...args: any[]) => any
  interface Window {
    api: ApiType,
  }
}