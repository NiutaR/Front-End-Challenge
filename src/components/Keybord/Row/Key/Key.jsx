import React, { useState } from 'react';
import classNames from 'classnames';
import keyStyles from './Key.module.css';

const Key = ({ label, value, className }) => {
  const [keyState, setKeyState] = useState('default');

  const handleMouseDown = () => {
    setKeyState('pressed');
  };

  const handleMouseUp = () => {
    setKeyState('released');
  };

  const handleMouseLeave = () => {
    setKeyState('default');
  };

  const keyClassNames = classNames(keyStyles.key, {
    [keyStyles['key--double']]: Array.isArray(value),
    [keyStyles['key--caps']]: label === 'CapsLock',
    [keyStyles['key--backspace']]: label === 'Backspace',
    [keyStyles['key--space']]: label === 'Space',
    [keyStyles['key--tab']]: label === 'Tab',
    [keyStyles['key--shift']]: label === 'Shift',
    [keyStyles['key--enter']]: label === 'Enter',
    [keyStyles['key--lock']]: label === 'NumLock',
    [keyStyles[`key--${keyState}`]]: true,
    [className]: className
  });

  return (
    <button className={keyClassNames}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}>
      {Array.isArray(value) ? value.join('\n') : value}
      <div className={keyStyles.label}>{label}</div>
    </button>
  );
};

export default Key;
