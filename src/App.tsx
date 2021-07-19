/*
 * @Description: App.tsx
 * @Date: 2021-07-06 22:19:52
 * @Author: LeiLiu
 */
import React, { /* useState, */ useEffect } from 'react';
import { Switch, Route, Redirect, /* useHistory */ } from 'react-router-dom';
import dayjs from 'dayjs';
// import styled from "styled-components";
import { Routes } from '@/router';
import Menus from '@/components/Menus';
import { WORDS } from '@/types';

// import background_3 from './images/background_3.jpg';

// const Container = styled.div`
//   flex: 1;
//   margin: auto 0;
//   padding: 2rem;
// `;

export function App(): React.ReactElement<Record<string, unknown>> {
  // const [path, setPath] = useState(Menus[0]);
  // const history = useHistory();

  // function pathChange(e: React.ChangeEvent<HTMLSelectElement>) {
  //   const val = e.target.value;
  //   setPath(val);
  //   history.push(val);
  // }

  useEffect(() => {
    // content
    let loginTime = localStorage.getItem(WORDS.LOGIN_TIME) || '';
    if (!loginTime) {
      loginTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    }
    // 相差一天
    if (dayjs(loginTime) < dayjs().endOf('day')) {
      localStorage.setItem(WORDS.TODOS_LIST, '');
    }
    return () => {
      // clearEffect
    };
  }, []);





  return (
    <div className="App">
      <Menus />
      {/* <Link to="" /> */}
      {/* route */}

      <div className="root-path__container">
        <Switch>
          {Routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            );
          })}
          <Route exact path="/" component={() => <Redirect to="/todos" />} />
        </Switch>

        {/* <img src={background_3} alt="" /> */}
        {/* <div className="test"></div> */}
      </div>
    </div>
  );
}