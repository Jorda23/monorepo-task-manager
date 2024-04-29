import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Tasks = lazy(() => import('../pages/Tasks'));
const List = lazy(() => import('../pages/List'));

export const ManagerRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div></div>}>
            <Home />
          </Suspense>
        }
      />

      <Route
        path="/home"
        element={
          <Suspense fallback={<div></div>}>
            <Home />
          </Suspense>
        }
      />

      <Route
        path="/tasks"
        element={
          <Suspense fallback={<div></div>}>
            <Tasks />
          </Suspense>
        }
      />

      <Route
        path="/List"
        element={
          <Suspense fallback={<div></div>}>
            <List />
          </Suspense>
        }
      />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
