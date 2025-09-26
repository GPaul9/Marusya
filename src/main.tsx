import 'normalize.css';
import './styles/index.scss';
import 'react-loading-skeleton/dist/skeleton.css'

import React from 'react';
import ReactDOM from 'react-dom/client'
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import { SkeletonTheme } from 'react-loading-skeleton';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SkeletonTheme baseColor='#45526e' highlightColor='#b4a9ff' borderRadius='0.75rem'>
          <App />
        </SkeletonTheme>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
