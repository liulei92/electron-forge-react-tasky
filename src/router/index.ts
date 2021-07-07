/*
 * @Description: router
 * @Date: 2021-07-06 23:10:14
 * @Author: LeiLiu
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { lazy } from 'react';

export type RoutesType = {
  name: string,
  path: string,
  component: React.LazyExoticComponent<(props: any) => JSX.Element>,
  hidden?: boolean,
}[]

export const Routes: RoutesType = [
  {
    name: 'home',
    path: '/home',
    component: lazy(() => import('../pages/home')),
    hidden: true
  },
  {
    name: 'about',
    path: '/about',
    component: lazy(() => import('../pages/about')),
    hidden: true
  },
  {
    name: 'todos',
    path: '/todos',
    component: lazy(() => import('../pages/Todos'))
  },
  {
    name: 'dones',
    path: '/dones',
    component: lazy(() => import('../pages/Todos'))
  },
  {
    name: 'add',
    path: '/add',
    component: lazy(() => import('../pages/Add')),
    hidden: true
  },
];