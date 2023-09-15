import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import MovieDetail from './routes/MovieDetail';
import Error from './routes/Error';

import { loader as moviesLoader } from './loader/movie-loader';
import { loader as movieLoader } from './loader/movie-detail-loader';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Root/>,
        id: 'movies',
        loader: moviesLoader,
        errorElement: <Error/>
      },
      {
        path: 'movies/:id',
        element: <MovieDetail/>,
        id: 'movie-detail',
        loader: movieLoader
      }
    ]

  }
]);

function App() {

  return <RouterProvider router={router}/>;
}

export default App
