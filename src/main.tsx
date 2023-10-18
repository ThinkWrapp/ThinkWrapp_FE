import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactPortalDom from 'react-dom';
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
                {ReactPortalDom.createPortal(
                    <Toaster richColors />,
                    document.getElementById('toast-root') as HTMLElement,
                )}
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>,
);
