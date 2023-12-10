import React from 'react';
import {
  Routes,
  Route,
  HashRouter as Router,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage';
import { NotFoundPage } from './modules/NotFoundPage';
import { CatalogPage } from './modules/CatalogPage';
import { PhonePage } from './modules/PhonePage';
import { CartPage } from './modules/CartPage';
import { FavouritesPage } from './modules/FavouritesPage';
import { PhonesProvider } from './context/GlobalProvider';

export const Root = () => (
  <PhonesProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="phones">
            <Route index element={<CatalogPage />} />
            <Route path=":phonesSlug?" element={<PhonePage />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="favourites" element={<FavouritesPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  </PhonesProvider>
);
