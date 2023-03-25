import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ListPage from './pages/ListPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
