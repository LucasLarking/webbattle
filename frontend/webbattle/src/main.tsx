import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routest.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from './GlobalStyles.tsx';

const colors = {
  grey: {
    100: '#272727',

  },
}

const theme = extendTheme({ colors })
const customChakraProviderProps: ChakraProviderProps = {
  cssVarsRoot: '--chakra-ui',
};


const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ChakraProvider theme={theme} {...customChakraProviderProps}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>

  </React.StrictMode>,
  document.getElementById('root')
);