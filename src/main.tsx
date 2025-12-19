import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/providers/ThemeProvider.tsx';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import Partnerships from './pages/Partnerships.tsx';
import ProductPage from './pages/ProductPage.tsx';
import ParaConsultores from './pages/ParaConsultores.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/parcerias',
        element: <Partnerships />,
      },
      {
        path: '/para-consultores',
        element: <ParaConsultores />,
      },
      {
        path: '/:productId',
        element: <ProductPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
