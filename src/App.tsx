/*
 * @Description: App.tsx
 * @Date: 2021-07-06 22:19:52
 * @Author: LeiLiu
 */
import React, { useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
// import styled from "styled-components";
import { Routes } from './router';

// const Container = styled.div`
//   flex: 1;
//   margin: auto 0;
//   padding: 2rem;
// `;

const Menus = Routes.map((item) => item.path);

export function App(): React.ReactElement<Record<string, unknown>> {
  const [path, setPath] = useState(Menus[0]);
  const history = useHistory();

  function pathChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value;
    setPath(val);
    history.push(val);
  }

  return (
    <div className="App">
      {/* routes */}
      <select
        value={path}
        onChange={pathChange}
      >
        {Menus.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
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
          <Route exact path="/" component={() => <Redirect to="/home" />} />
        </Switch>
      </div>
    </div>
  );
}