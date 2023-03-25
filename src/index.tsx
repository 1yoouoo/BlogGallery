import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { worker } from './libs/api/mocks/browsers';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
