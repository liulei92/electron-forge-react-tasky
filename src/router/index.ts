/*
 * @Description: router
 * @Date: 2021-07-06 23:10:14
 * @Author: LeiLiu
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { lazy } from 'react';

export const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../pages/home'))
  },
  {
    path: '/about',
    component: lazy(() => import('../pages/about'))
  },
];