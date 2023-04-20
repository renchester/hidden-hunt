import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import LeaderboardPage from './pages/LeaderboardPage';
import ErrorPage from './pages/ErrorPage';

import MapLeaderboard, {
  mapLeaderboardLoader,
} from './components/MapLeaderboard';

import './css/index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path=":mapType" element={<GamePage />} />
      <Route path="leaderboard" element={<LeaderboardPage />}>
        <Route
          path=":mapType"
          element={<MapLeaderboard />}
          loader={mapLeaderboardLoader}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
