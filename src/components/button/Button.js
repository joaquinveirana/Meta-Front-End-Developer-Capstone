import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({
  buttonType,
  path,
  innerText,
  fillParent,
  useShadow,
  disabled,
  callback,
}) => {
  const navigate = useNavigate();

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
      onClick={(e) => {
        e.preventDefault();
        if (path) navigate(path);
        else callback();
      }}
    >
      {innerText}
    </button>
  );
};

export default Button;
