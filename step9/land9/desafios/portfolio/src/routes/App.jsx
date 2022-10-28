import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Music } from '../components/Music';

export function App() {

  return (
    <Fragment>
      <Header />
      <Music />
      <Outlet />
    </Fragment>
  )
}