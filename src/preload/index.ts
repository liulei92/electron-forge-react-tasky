/*
 * @Description: preload.ts
 * @Date: 2021-07-07 09:16:09
 * @Author: LeiLiu
 */
import { contextBridge, ipcRenderer } from 'electron';

const electron = {
  ipcRenderer,
  invoke(key: string, ...args: any[]) {
    return ipcRenderer.invoke(key, ...args);
  },
  send(key: string, ...args: any[]) {
    return ipcRenderer.send(key, ...args);
  },
  startTask(ev: Function) {
    const handler = (e: any, msg: string) => {
      ev(msg);
    };

    ipcRenderer.addListener('setTask', handler);

    return function stopWatch() {
      ipcRenderer.removeListener('setTask', handler);
    };
  },
  // ...todos
};

export type ElectronType = typeof electron;
// contextIsolation true 才生效
contextBridge.exposeInMainWorld('electron', electron);

