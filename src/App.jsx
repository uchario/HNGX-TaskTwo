import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Root/>
      }
    ]

  }
]);

function App() {

  return <RouterProvider router={router}/>;
}

export default App
