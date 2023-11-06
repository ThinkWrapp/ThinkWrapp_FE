import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayOut from './layout/RootLayout';
import GoogleLogin from './pages/GoogleLogin';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import LobbyPage from './pages/LobbyPage';
import CharacterPage from './pages/CharacterPage';
import RoomPage from './pages/RoomPage';
import VideoContextProvider from './hooks/context/videoContext';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayOut />,
        children: [
            { index: true, element: <LobbyPage /> },
            { path: 'character', element: <CharacterPage /> },
            { path: 'room/:roomId', element: <RoomPage /> },
            { path: 'social-auth', element: <GoogleLogin /> },
        ],
    },
]);

const App = () => {
    return (
        // @ts-ignore
        <ThemeProvider theme={theme}>
            <VideoContextProvider>
                <RouterProvider router={router} />
            </VideoContextProvider>
        </ThemeProvider>
    );
};

export default App;
