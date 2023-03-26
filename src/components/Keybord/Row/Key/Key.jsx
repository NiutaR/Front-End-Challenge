import React from 'react';
import classNames from 'classnames';
import keyStyles from './Key.module.css';

const Key = ({ label, value, className }) => {
  const keyClassNames = classNames(keyStyles.key, {
    [keyStyles['key--double']]: Array.isArray(value),
    [keyStyles['key--caps']]: label === 'CapsLock',
    [keyStyles['key--backspace']]: label === 'Backspace',
    [keyStyles['key--space']]: label === 'Space',
    [keyStyles['key--tab']]: label === 'Tab',
    [keyStyles['key--shift']]: label === 'Shift',
    [keyStyles['key--enter']]: label === 'Enter',
    [keyStyles['key--lock']]: label === 'NumLock',
    [className]: className
  });

  return (
    <button className={keyClassNames}>
      {Array.isArray(value) ? value.join('\n') : value}
      <div className={keyStyles.label}>{label}</div>
    </button>
  );
};

export default Key;