import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Error from './components/Error.jsx';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movies from './components/Movies';
import AllMovies from './components/AllMovies';
import MovieDisplay from './components/MovieDisplay';
import LanguageContext from './contexts/LanguageContext';
import { LanguageContextProvider } from './contexts/LanguageContext';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/movies/:movieCategory',
    element: <Movies />,
  },
  {
    path: '/movies',
    element: <AllMovies />,
  },
  {
    path: '/movie/:movieId',
    element: <MovieDisplay />,
  },
]);

const Root = () => {
  const [language, setLanguage] = useState('English');

  return (
    <LanguageContextProvider>
      <RouterProvider router={appRouter} />
    </LanguageContextProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
