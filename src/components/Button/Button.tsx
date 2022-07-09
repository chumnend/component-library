import React, { MouseEventHandler } from 'react';
import * as $ from './Button.styles';

export interface Props {
  variant: 'primary' | 'secondary';
  text?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ variant, text, disabled, onClick }: Props) => {
  let content;
  switch (variant) {
    case 'primary':
      content = (
        <$.PrimaryButton onClick={onClick} disabled={disabled}>
          {text}
        </$.PrimaryButton>
      );
      break;
    case 'secondary':
      content = (
        <$.SecondaryButton onClick={onClick} disabled={disabled}>
          {text}
        </$.SecondaryButton>
      );
      break;
  }

  return content;
};

export default Button;
