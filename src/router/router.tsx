import { createHashRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';

const BASE_URL = import.meta.env.BASE_URL;

// export const router = createBrowserRouter([
export const router = createHashRouter([
  {
    path: BASE_URL,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
