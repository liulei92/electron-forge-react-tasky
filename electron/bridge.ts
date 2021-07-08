/*
 * @Description: bridge.ts
 * @Date: 2021-07-08 16:03:14
 * @Author: LeiLiu
 */
import { contextBridge, ipcRenderer } from 'electron';

const api = {
  // invoke(key: string, ...args: any[]) {
  //   return ipcRenderer.invoke(key, ...args);
  // },
  // send(key: string, ...args: any[]) {
  //   return ipcRenderer.send(key, ...args);
  // },
  // startTask(ev: Function) {
  //   const handler = (e: any, msg: string) => {
  //     console.log(123);
  //     ev(msg);
  //   };

  //   ipcRenderer.addListener('setTask', handler);

  //   return function stopWatch() {
  //     ipcRenderer.removeListener('setTask', handler);
  //   };
  // },
  // ...todos
  send: (channel: string, ...args: any[]) => {
    ipcRenderer.invoke(channel, ...args).catch(e => console.log(e));
  },
  receive: (channel: string, listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => {
    console.log('preload-receive called. args: ');
    ipcRenderer.on(channel, listener);
  },
  // https://www.electronjs.org/docs/all#ipcrenderersendtowebcontentsid-channel-args
  electronIpcSendTo: (webContentsId: number, channel: string, ...args: any[]) => {
    ipcRenderer.sendTo(webContentsId, channel, ...args);
  },
  // https://github.com/frederiksen/angular-electron-boilerplate/blob/master/src/preload/preload.ts
  electronIpcSend: (channel: string, ...arg: any) => {
    ipcRenderer.send(channel, ...arg);
  },
  electronIpcSendSync: (channel: string, ...arg: any) => {
    return ipcRenderer.sendSync(channel, ...arg);
  },
  electronIpcOn: (channel: string, listener: (event: any, ...arg: any) => void) => {
    ipcRenderer.on(channel, listener);
  },
  electronIpcOnce: (channel: string, listener: (event: any, ...arg: any) => void) => {
    ipcRenderer.once(channel, listener);
  },
  electronIpcRemoveListener:  (channel: string, listener: (event: any, ...arg: any) => 
  void) => {
    ipcRenderer.removeListener(channel, listener);
  },
  electronIpcRemoveAllListeners: (channel: string) => {
    ipcRenderer.removeAllListeners(channel);
  }
};

export type ApiType = typeof api;
// contextIsolation true 才生效
contextBridge.exposeInMainWorld('api', api);
