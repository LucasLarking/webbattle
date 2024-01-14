import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routest.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>

  </React.StrictMode>,
  document.getElementById('root')
);