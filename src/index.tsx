import React from 'react';
import App from './components/app';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { createRoot } from 'react-dom/client';

console.log('index');

const store = setupStore();

const root = createRoot(document.getElementById('root') as HTMLElement);

// Первый рендер приложения
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);