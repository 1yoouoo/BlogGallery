import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import ListPage from './pages/ListPage';
import ViewPage from './pages/ViewPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />}></Route>
        <Route path="/view/:id" element={<ViewPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
