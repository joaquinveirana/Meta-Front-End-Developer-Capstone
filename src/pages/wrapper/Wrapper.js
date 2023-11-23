import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import PostFooter from '../../components/post-footer/PostFooter';
import { CartContext } from '../../App';

const navItems = [
  { text: 'HOME', path: '/' },
  { text: 'ABOUT', path: '/about' },
  { text: 'MENU', path: '/menu' },
  { text: 'RESERVATION', path: '/reservation' },
  { text: 'LOG IN', path: '/login' },
];

const WrapperPage = ({ children }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <Header>
        <Nav navItems={navItems} cartItemsCounter={cartItems.length} />
      </Header>
      {children}
      <Footer navItems={navItems} />
      <PostFooter />
    </>
  );
};

export default WrapperPage;
