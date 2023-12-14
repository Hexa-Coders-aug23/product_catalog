import './App.module.scss';
import './styles/blocks/_App.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './modules/shared/components/footer';
import { Header } from './modules/shared/components/header';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
