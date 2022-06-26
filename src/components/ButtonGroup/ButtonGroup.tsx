import React from 'react';
import * as $ from './ButtonGroup.styles';

import { Props as ButtonProps } from '../Button/Button';

export interface Props {
  children:
    | React.ReactElement<ButtonProps>
    | Array<React.ReactElement<ButtonProps>>;
  direction: 'row' | 'column';
}

const ButtonGroup = ({ children, direction }: Props) => {
  return <$.Div direction={direction}>{children}</$.Div>;
};

export default ButtonGroup;
