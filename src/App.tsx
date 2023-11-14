import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { checkAuthLoader, redirectHome } from './utils/user';
import GoogleLogin from './pages/GoogleLogin';
import RootLayOut from './layout/RootLayout';
import LobbyPage from './pages/LobbyPage';
import VideoContextProvider from './hooks/context/videoContext';
import theme from './theme';

const CharacterPage = lazy(() => import('@/pages/CharacterPage'));
const RoomPage = lazy(() => import('@/pages/RoomPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayOut />,
        children: [
            { index: true, element: <LobbyPage /> },
            { path: 'character', element: <CharacterPage />, loader: checkAuthLoader },
            { path: 'room/:roomId', element: <RoomPage />, loader: checkAuthLoader },
            { path: 'social-auth', element: <GoogleLogin /> },
            { path: '*', element: <LobbyPage />, loader: redirectHome },
        ],
    },
]);

const App = () => {
    return (
        // @ts-ignore
        <ThemeProvider theme={theme}>
            <VideoContextProvider>
                <Suspense>
                    <RouterProvider router={router} />
                </Suspense>
            </VideoContextProvider>
        </ThemeProvider>
    );
};

export default App;
