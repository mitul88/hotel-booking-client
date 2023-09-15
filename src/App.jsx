import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import RootPage from './pages/Root';
import { StyledEngineProvider } from '@mui/material';

export const router = createBrowserRouter([
  {
      path: '/',
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <Home />
        }
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
