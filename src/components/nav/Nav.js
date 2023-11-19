import './Nav.css';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = ({ navItems, cartItemsCounter }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav>
      <ul className='link-list-desktop'>
        {navItems.map((navItem, index) => {
          return (
            <li key={index} className='link-list-desktop-item'>
              <a className='link-list-desktop-item-text' href={navItem.path}>
                {navItem.text}
              </a>
            </li>
          );
        })}
        <li className='link-list-desktop-item'>
          <a href='/cart'>
            <AiOutlineShoppingCart size={20} color='495e57' />
          </a>

          {cartItemsCounter !== 0 && (
            <div className='link-list-desktop-cart-bubble'>
              {cartItemsCounter}
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
          <div className='link-list-mobile-panel'>
            <div className='link-list-mobile-panel-close'>
              <AiOutlineClose
                size={25}
                className='link-list-mobile-panel-close-icon'
                color='495e57'
                onClick={() => setOpenNav(!openNav)}
              />
            </div>
            <ul>
              {navItems.map((navItem) => {
                return (
                  <li className='link-list-mobile-panel-item'>
                    <a
                      className='link-list-mobile-panel-item-text'
                      href={navItem.path}
                      onClick={() => setOpenNav(false)}
                    >
                      {navItem.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
