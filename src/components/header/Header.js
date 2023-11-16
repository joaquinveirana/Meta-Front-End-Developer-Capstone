import './Header.css';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='header-content'>
        <a href='/'>
          <img
            className='header-content-logo'
            src='/Asset 16@4x.png'
            height={50}
            alt='Main logo'
          />
        </a>
        <>{props.children}</>
      </div>
    </header>
  );
};

export default Header;
