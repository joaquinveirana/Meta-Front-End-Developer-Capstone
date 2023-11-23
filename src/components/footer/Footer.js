import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-content-image'>
          <img
            src='/Asset 18@4x.png'
            height={150}
            alt='Little Lemon Footer Logo'
          />
        </div>
        <div>
          <ul>
            <h6 className='footer-content-link footer-content-link-title'>
              NAVIGATION
            </h6>
            {props.navItems.map((navItem, index) => {
              return (
                <li key={index} className='footer-content-link'>
                  <Link className='footer-content-link-text' to={navItem.path}>
                    {navItem.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            <h6 className='footer-content-link footer-content-link-title'>
              CONTACT
            </h6>
            <li className='footer-content-link-text'>Lemon Street 1234</li>
            <li className='footer-content-link-text'>+000 123 456</li>
            <li className='footer-content-link-text'>
              contact@littlelemon.com
            </li>
          </ul>
        </div>
        <div>
          {' '}
          <ul>
            <h6 className='footer-content-link footer-content-link-title'>
              SOCIALS
            </h6>
            <li className='footer-content-link'>
              <Link className='footer-content-link-text' to={''}>
                Facebook
              </Link>
            </li>
            <li className='footer-content-link'>
              <Link className='footer-content-link-text' to={''}>
                Instagram
              </Link>
            </li>
            <li className='footer-content-link'>
              <Link className='footer-content-link-text' to={''}>
                Tik Tok
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
