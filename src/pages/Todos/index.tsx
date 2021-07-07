/*
 * @Description: Todos.tsx
 * @Date: 2021-07-07 11:51:15
 * @Author: LeiLiu
 */
import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import { WORDS } from '../../types';
import './todos.scss';

const { Column } = Table;
// const { ipcRenderer } = window.require('electron'); nodeIntegration: false, 不可使用

export default function Todos(props: any) {
  const [list, setList] = useState<{ id: number, text: string, time: number }[]>([]);

  useEffect(() => {
    // content
    try {
      const list = localStorage.getItem(WORDS.TODOS_LIST);
      setList(list ? JSON.parse(list).map((item: any, i: number) => ({ ...item, id: i + 1 })) : []);
    } catch (error) {
      console.log(error);
    }
    return () => {
      // clearEffect
    };
  }, []);

  // const onQuit = () => {
  //   window.api.electronIpcSend('mainWindow:close'); // ipcRenderer模块向主进程发送消息
  // };

  const onDone = (e: any, index: number) => {
    e.preventDefault();
    console.log(index);
  };
  const onDelete = (e: any, index: number) => {
    e.preventDefault();
    list.splice(index, 1);
    const newList = list.map((item, i) => ({ ...item, id: i + 1 }));
    setList(newList);
    localStorage.setItem(WORDS.TODOS_LIST, JSON.stringify(newList));
  };

  return (
    <div className="todos">
      <div className="todos__title">待完成任务</div>
      <Table rowKey="id" dataSource={list} pagination={{ size: 'small' }}>
        <Column title="标题" dataIndex="text" key="text" />
        <Column
          title="时间"
          dataIndex="time"
          key="time"
          render={time => (
            <>
              <Tag color="blue">
                {time}
              </Tag>
            </>
          )}
        />
        <Column
          title="操作"
          key="action"
          render={(text, record, index) => (
            <Space size="middle">
              <a href="#!" onClick={(e) => onDone(e, index)}>Done</a>
              <a href="#!" onClick={(e) => onDelete(e, index)}>Delete</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}