import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Lobby from './pages/Lobby';
import RootLayOut from './components/Layout/RootLayOut';
import LoadAuth from './components/SocialLogin/LoadAuth';
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayOut />,
        children: [
            { index: true, element: <Lobby /> },
            { path: 'social-auth', element: <LoadAuth /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
