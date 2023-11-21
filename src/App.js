import './App.css';
import { useState, createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './pages/main/Main';
import AboutPage from './pages/about/About';
import MenuPage from './pages/menu/Menu';
import ReservationPage from './pages/reservation/Reservation';
import LoginPage from './pages/login/Login';
import CartPage from './pages/cart/Cart';
import NotFound from './pages/not-found/NotFound';
import WrapperPage from './pages/wrapper/Wrapper';

// Cart Management using context hook
export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <WrapperPage>
          <MainPage />
        </WrapperPage>
      ),
      errorElement: <NotFound />,
    },
    {
      path: '/cart',
      element: (
        <WrapperPage>
          <CartPage />
        </WrapperPage>
      ),
    },
    {
      path: '/about',
      element: (
        <WrapperPage>
          <AboutPage />
        </WrapperPage>
      ),
    },
    {
      path: '/menu',
      element: (
        <WrapperPage>
          <MenuPage />
        </WrapperPage>
      ),
    },
    {
      path: '/reservation',
      element: (
        <WrapperPage>
          <ReservationPage />
        </WrapperPage>
      ),
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
