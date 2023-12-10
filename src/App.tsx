import './App.module.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './modules/shared/components/footer';
import { Header } from './modules/shared/components/header';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
