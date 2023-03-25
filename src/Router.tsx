import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import ListPage from './pages/ListPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
