/*
 * @Description: Menus.tsx
 * @Date: 2021-07-07 11:08:41
 * @Author: LeiLiu
 */
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import { HistoryOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Routes } from '../../router';
import './menus.scss';

let timer: any;

export default function Menus(props: any) {
  const [title, setTitle] = useState(dayjs().format('YYYY-MM-DD'));
  const [spin, setSpin] = useState(false);
  const history = useHistory();

  function add() {
    history.push('/add');
  }

  function refreshTitle() {
    if (timer !== null) clearTimeout(timer);
    setTitle(dayjs().format('YYYY-MM-DD'));
    setSpin(true);
    timer = setTimeout(() => {
      setSpin(false);
      timer = null;
    }, 500);
  }

  return (
    <div className="root-menus">
      <div className="root-menus__title">{title}<HistoryOutlined spin={spin} onClick={(refreshTitle)} /></div>
      <div className="root-menus__container">
        {
          Routes.map((item, index) => {
            return (
              !item?.hidden && <NavLink className="root-menus__container-item" to={item.path} key={item.path}>{item.name}</NavLink>
            );
          })
        }
      </div>
      <div className="root-menus__actions">
        <div className="root-menus__actions-item" onClick={add}>
          {/* <i>+</i> */}
          <PlusCircleOutlined style={{ fontSize: 24, color: '#31c27c' }} />
          <span>添加任务</span>
        </div>
      </div>
    </div>
  );
}
