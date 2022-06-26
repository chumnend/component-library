import React from 'react';
import * as $ from './ButtonGroup.styles';

import { ButtonProps } from '../Button/Button';

export interface ButtonGroupProps {
  children:
    | React.ReactElement<ButtonProps>
    | Array<React.ReactElement<ButtonProps>>;
  direction: 'row' | 'column';
}

const ButtonGroup = ({ children, direction }: ButtonGroupProps) => {
  return <$.Div direction={direction}>{children}</$.Div>;
};

export default ButtonGroup;
