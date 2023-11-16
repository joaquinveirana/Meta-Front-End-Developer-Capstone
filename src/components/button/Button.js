import './Button.css';

const Button = ({ buttonType, path, innerText, fillParent, useShadow }) => {
  return (
    <a className={fillParent && 'fill-parent'} href={path}>
      <button
        className={
          (buttonType
            ? `button button-${buttonType}`
            : 'button button-light ') +
          ' ' +
          (fillParent && 'fill-parent') +
          ' ' +
          (useShadow && 'button-shadow')
        }
      >
        {innerText}
      </button>
    </a>
  );
};

export default Button;
