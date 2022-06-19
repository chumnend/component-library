import React from 'react';
import styled from 'styled-components';

import { ButtonProps } from '../Button/Button';

interface DivProps {
  readonly direction: string;
}

export const Div = styled.div<DivProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 0.5rem;
`;

export interface ButtonGroupProps {
  children:
    | React.ReactElement<ButtonProps>
    | Array<React.ReactElement<ButtonProps>>;
  direction: 'row' | 'column';
}

const ButtonGroup = ({ children, direction }: ButtonGroupProps) => {
  return <Div direction={direction}>{children}</Div>;
};

export default ButtonGroup;
