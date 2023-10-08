import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import RootPage from './pages/Root';
import { StyledEngineProvider } from '@mui/material';
import PropertyListPage from './pages/PropertyList';
import PropertyDetailsPage from './pages/PropertyDetails';
import CheckoutPage from './pages/Checkout';

export const router = createBrowserRouter([
  {
      path: '/',
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "rooms",
          element: <PropertyListPage />
        },
        {
          path: "details",
          element: <PropertyDetailsPage />
        },
        {
          path: "checkout",
          element: <CheckoutPage />
        },
      ]
  },
])

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  )
}

export default App
