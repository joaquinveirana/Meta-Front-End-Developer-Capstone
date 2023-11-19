import './App.css';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import PostFooter from './components/post-footer/PostFooter';

import MainPage from './pages/main/Main';
import AboutPage from './pages/about/About';
import MenuPage from './pages/menu/Menu';
import ReservationPage from './pages/reservation/Reservation';
import LoginPage from './pages/login/Login';
import CartPage from './pages/cart/Cart';
import NotFound from './pages/not-found/NotFound';

const navItems = [
  { text: 'HOME', path: '/' },
  { text: 'ABOUT', path: '/about' },
  { text: 'MENU', path: '/menu' },
  { text: 'RESERVATION', path: '/reservation' },
  { text: 'LOG IN', path: '/login' },
];

function App() {
  const [cartItemsCounter, setCartItemsCounter] = useState(0);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      errorElement: <NotFound />,
    },
    {
      path: '/cart',
      element: <CartPage />,
    },
    {
      path: '/cart/:dishId',
      element: (
        <CartPage
          addItemCallback={() => setCartItemsCounter(cartItemsCounter + 1)}
          deleteItemCallback={() => setCartItemsCounter(cartItemsCounter - 1)}
        />
      ),
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
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);

  return (
    <main>
      {window.location.pathname !== '/login' && (
        <Header>
          <Nav navItems={navItems} cartItemsCounter={cartItemsCounter} />
        </Header>
      )}
      <RouterProvider router={router} />
      {window.location.pathname !== '/login' && (
        <>
          <Footer navItems={navItems} />
          <PostFooter />
        </>
      )}
    </main>
  );
}

export default App;
