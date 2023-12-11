import './App.module.scss';
import React from 'react';
// import { Outlet } from 'react-router-dom';
import { Footer } from './modules/shared/components/footer';
import { Header } from './modules/shared/components/header';
import { CatalogPage } from './modules/CatalogPage';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <CatalogPage />
      <Footer />
    </>
  );
};
