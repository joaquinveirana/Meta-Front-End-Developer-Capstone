import './Button.css';

const Button = ({
  buttonType,
  path,
  innerText,
  fillParent,
  useShadow,
  disabled,
  callback,
}) => {
  return (
    <button
      className={
        (buttonType ? `button button-${buttonType}` : 'button button-light ') +
        ' ' +
        (fillParent && 'fill-parent') +
        ' ' +
        (useShadow && 'button-shadow') +
        ' ' +
        (disabled && 'button-disabled') +
        ' ' +
        (fillParent && 'fill-parent')
      }
      onClick={() => {
        if (path) window.location.href = path;
        else callback();
      }}
    >
      {innerText}
    </button>
  );
};

export default Button;
