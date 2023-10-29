import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactPortalDom from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <App />
                    <ReactQueryDevtools initialIsOpen={false} />
                    {ReactPortalDom.createPortal(
                        <Toaster richColors />,
                        document.getElementById('toast-root') as HTMLElement,
                    )}
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
