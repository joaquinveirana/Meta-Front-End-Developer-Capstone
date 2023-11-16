import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import PostFooter from './components/post-footer/PostFooter';
import AboutPage from './pages/about/About';
import OrderPage from './pages/order/Order';
import NotFound from './pages/not-found/NotFound';
import MenuPage from './pages/menu/Menu';
import ReservationPage from './pages/reservation/Reservation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/order/:dishId',
    element: <OrderPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '/reservation',
    element: <ReservationPage />,
  },
]);

const navItems = [
  { text: 'HOME', path: '/' },
  { text: 'ABOUT', path: '/about' },
  { text: 'MENU', path: '/menu' },
  { text: 'RESERVATION', path: '/reservation' },
  { text: 'LOG IN', path: '/login' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header>
      <Nav navItems={navItems} cartItemsCounter={1} />
    </Header>
    <RouterProvider router={router} />
    <Footer navItems={navItems} />
    <PostFooter />
  </React.StrictMode>
);

reportWebVitals();
