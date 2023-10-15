import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import RootLayOut from './layout/RootLayout';
import Lobby from './pages/Lobby';
import GoogleLogin from './pages/GoogleLogin';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayOut />,
        children: [
            { index: true, element: <Lobby /> },
            { path: 'social-auth', element: <GoogleLogin /> },
        ],
    },
]);

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <Toaster richColors />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
