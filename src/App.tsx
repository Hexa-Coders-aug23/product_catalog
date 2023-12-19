import './App.module.scss';
import './styles/blocks/_App.scss';
import React from 'react';
import Favicon from 'react-favicon';
import { Outlet } from 'react-router-dom';
import { Footer } from './modules/shared/components/footer';
import { Header } from './modules/shared/components/header';
import favicon from './static/icons/favicon.png';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Favicon url={favicon} />
      <Header />
      <div className="main-outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
