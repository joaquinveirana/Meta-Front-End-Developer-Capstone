import './Nav.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';
const Nav = (props) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav>
      <ul className='link-list-desktop'>
        {props.navItems.map((navItem) => {
          return (
            <li className='link-list-desktop-item'>
              <a className='link-list-desktop-item-text' href={navItem.path}>
                {navItem.text}
              </a>
            </li>
          );
        })}
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
              {props.navItems.map((navItem) => {
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
