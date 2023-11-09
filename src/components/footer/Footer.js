import './Footer.css';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-content-image'>
          <img
            src='Asset 18@4x.png'
            height={150}
            alt='Little Lemon Footer Logo'
          />
        </div>
        <div>
          <ul>
            <h6 className='footer-content-link footer-content-link-title'>
              NAVIGATION
            </h6>
            {props.navItems.map((navItem) => {
              return (
                <li className='footer-content-link'>
                  <a className='footer-content-link-text' href={navItem.path}>
                    {navItem.text}
                  </a>
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
              <a className='footer-content-link-text' href=''>
                Facebook
              </a>
            </li>
            <li className='footer-content-link'>
              <a className='footer-content-link-text' href=''>
                Instagram
              </a>
            </li>
            <li className='footer-content-link'>
              <a className='footer-content-link-text' href=''>
                Tik Tok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
