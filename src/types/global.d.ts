/*
 * @Description: global.d.ts
 * @Date: 2021-07-07 11:55:40
 * @Author: LeiLiu
 */
import { ElectronType } from '../preload';

declare global {
  interface Window {
    electron: ElectronType,
  }
}