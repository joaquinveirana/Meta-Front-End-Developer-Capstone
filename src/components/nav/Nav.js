import React, { useState } from 'react';
import './Nav.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Nav = ({ navItems, cartItemsCounter }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav>
      <ul className='link-list-desktop'>
        {navItems.map((navItem, index) => {
          return (
            <li key={index} className='link-list-desktop-item'>
              <Link className='link-list-desktop-item-text' to={navItem.path}>
                {navItem.text}
              </Link>
            </li>
          );
        })}
        <li className='link-list-desktop-item'>
          <Link to='/cart'>
            <AiOutlineShoppingCart size={20} color='495e57' />
          </Link>

          {cartItemsCounter !== 0 && (
            <div className='link-list-desktop-cart-bubble'>
              {cartItemsCounter > 9 ? '9+' : cartItemsCounter}
            </div>
          )}
        </li>
      </ul>
      <div className='link-list-mobile'>
        {!openNav ? (
          <div className='link-list-mobile-icon'>
            <GiHamburgerMenu
              size={20}
              color='495e57'
              onClick={() => setOpenNav(!openNav)}
            />
          </div>
        ) : (
          <div className={`link-list-mobile-panel ${openNav && 'nav-fixed'}`}>
            <div className='link-list-mobile-panel-close'>
              <AiOutlineClose
                size={25}
                className='link-list-mobile-panel-close-icon'
                color='495e57'
                onClick={() => setOpenNav(!openNav)}
              />
            </div>
            <ul>
              {navItems.map((navItem, index) => {
                return (
                  <li key={index} className='link-list-mobile-panel-item'>
                    <Link
                      className='link-list-mobile-panel-item-text'
                      to={navItem.path}
                      onClick={() => setOpenNav(false)}
                    >
                      {navItem.text}
                    </Link>
                  </li>
                );
              })}
              <li className='link-list-mobile-panel-item'>
                <Link
                  className='link-list-mobile-panel-item-text'
                  to='/cart'
                  onClick={() => setOpenNav(false)}
                >
                  CART
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
