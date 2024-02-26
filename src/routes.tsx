import { useRoutes, useLocation, Navigate } from 'react-router-dom'
import { Checkout } from './Pages/Checkout.tsx'
import { Homepage } from './Pages/Homepage.tsx'
import { NotFound } from './Pages/NotFound.tsx'
import { Header } from './components/Header/Header'

export function Routes() {
  const location = useLocation()

  const element = useRoutes([
    {
      path: '/',
      element: <Homepage />,
      errorElement: <NotFound />
    },
    {
      path: '/checkout',
      element: <Checkout />
    },
    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ]);

  return (
    <div>
      {location.pathname !== '/404' && <Header />}
      {element}
    </div>
  )
}
