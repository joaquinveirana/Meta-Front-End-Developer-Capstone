import './Button.css';

const Button = ({ buttonType, path, innerText }) => {
  return (
    <a href={path}>
      <button
        className={
          buttonType ? 'button button-' + buttonType : 'button button-light'
        }
      >
        {innerText}
      </button>
    </a>
  );
};

export default Button;
