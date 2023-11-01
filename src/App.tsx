import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayOut from './layout/RootLayout';
import GoogleLogin from './pages/GoogleLogin';
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
