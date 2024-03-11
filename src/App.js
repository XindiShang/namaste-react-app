import React from 'react';
import ReactDom from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantDetail from './components/RestaurantDetail';

/**
 * Structure
 * Header
 * - Logo
 * - Navigation
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Card
 * Footer
 * - Disclaimer
 * - Contact
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div id="body">
        <Outlet />
      </div>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'restaurants/:id',
        element: <RestaurantDetail />
      }
    ]
  },

]);

const rootDom = document.getElementById('root');
if (!rootDom) throw new Error('Root DOM not found');

const root = ReactDom.createRoot(rootDom);

root.render(
  // <React.StrictMode>
  <RouterProvider router={appRouter} />
  // </React.StrictMode>
);
