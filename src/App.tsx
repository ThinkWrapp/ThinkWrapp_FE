import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayOut from './layout/RootLayout';
import LobbyPage from './pages/LobbyPage';
import GoogleLogin from './pages/GoogleLogin';
import SelectAvatarPage from './pages/SelectAvatarPage';
import RoomPage from './pages/RoomPage';
import MetaPage from './pages/MetaPage';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayOut />,
        children: [
            { index: true, element: <MetaPage /> },
            { path: 'social-auth', element: <GoogleLogin /> },
        ],
    },
]);

const App = () => {
    return (
        // @ts-ignore
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default App;
