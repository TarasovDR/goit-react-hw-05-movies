import Loader from 'components/Loader';
import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
import NotFoundView from './pages/NotFoundView';
const HomePage = lazy(() =>
  import('./pages/HomePage.js' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import(
    './pages/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "MoviesPage" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
