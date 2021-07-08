/*
 * @Description: remind.tsx
 * @Date: 2021-07-07 17:00:17
 * @Author: LeiLiu
 */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

export default function Remind() {
  const [task, setTask] = useState('');
  // let taskEv:any;

  useEffect(() => {
    console.log(window.api);
    // 在remindWindow渲染进程中，通过ipcRenderer.on接受消息
    // taskEv = window.electron.startTask((task: string) => {
    //   console.log(task);
    //   setTask(task);
    // });
    window.api.electronIpcOn('setTask', (event: any, task: string) => {
      console.log(event, task);
      setTask(task);
      // todo 推送todos 清除已弹出的任务
      // window.api.electronIpcSend('mainWindow:task-delete', task)
      // todos 需要 electronIpcOn 此事件去处理
    });
    return () => {
      // clearEffect
      // taskEv && taskEv();
    };
  }, []);

  const onClose = () => {
    window.api.electronIpcSend('remindWindow:close');
  };

  return (
    <div className="remind-box">
      <span>{decodeURIComponent(task)}的时间到啦！</span>
      <Button type="primary" size="small" style={{ width: '100px' }} onClick={onClose}>知道了</Button>
    </div>
  );
}

