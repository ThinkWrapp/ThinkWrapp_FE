import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'styled-components';
import theme from './theme.ts';
import store from './store.ts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
                <Toaster richColors />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>,
);
