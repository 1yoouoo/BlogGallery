import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const ListPage = lazy(() => import('./pages/ListPage'));
const ViewPage = lazy(() => import('./pages/ViewPage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>로딩중 ...</div>}>
        <Routes>
          <Route path="/" Component={ListPage}></Route>
          <Route path="/view/:id" Component={ViewPage}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
