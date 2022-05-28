import React from 'react';

import { ButtonProps } from './Button.types';

const Button = ({ text, disabled }: ButtonProps) => {
  return <button disabled={disabled} >{text}</button>
};

export default Button;
