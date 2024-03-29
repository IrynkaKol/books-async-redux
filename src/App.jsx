import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */)
);
// const AuthorsView = lazy(() =>
//   import('./views/AuthorsView.js' /* webpackChunkName: "authors-view" */),
// );
const BooksView = lazy(() =>
  import('./views/BooksView.js' /* webpackChunkName: "books-view" */)
);
const BookDetailsView = lazy(() =>
  import('./views/BookDetailsView.js' /* webpackChunkName: "book-view" */)
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "404-view" */)
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>ЗАГРУЖАЕМ МАРШРУТ...</h1>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          {/* <Route path="/authors">
            <AuthorsView />
          </Route> */}
          <Route path="/books" element={<BooksView />} />
          <Route path="/books/:id" element={<BookDetailsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
