import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import RootPage from './pages/Root';


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
    <RouterProvider router={router} />
  )
}

export default App
