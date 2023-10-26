import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayOut from './layout/RootLayout';
import LobbyPage from './pages/LobbyPage';
import GoogleLogin from './pages/GoogleLogin';
import SelectAvatarPage from './pages/SelectAvatarPage';
import RoomPage from './pages/RoomPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayOut />,
        children: [
            { index: true, element: <LobbyPage /> },
            { path: 'character', element: <SelectAvatarPage /> },
            { path: 'room/:roomId', children: [{ index: true, element: <RoomPage /> }] },
            { path: 'social-auth', element: <GoogleLogin /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
