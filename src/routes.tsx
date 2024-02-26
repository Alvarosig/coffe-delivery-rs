import { createBrowserRouter } from 'react-router-dom';

import { Checkout } from './Pages/Checkout.tsx';
import { Homepage } from './Pages/Homepage.tsx';
import { NotFound } from './Pages/NotFound.tsx';

export const router = createBrowserRouter([
  {
  path: '/',
  element: <Homepage />,
  errorElement: <NotFound />
  },
  {
  path: '/checkout',
  element: <Checkout />
  }
])