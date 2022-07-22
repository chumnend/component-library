import React from 'react';

import * as $ from './Drawer.styles';

export interface Props {
  show: boolean;
  close: () => void;
  children?: React.ReactNode;
}

const Drawer = ({ show, close, children }: Props) => {
  return (
    <$.Drawer show={show}>
      <$.Close>
        <$.CloseIcon onClick={close}>X</$.CloseIcon>
      </$.Close>
      <$.Ul>{children}</$.Ul>
    </$.Drawer>
  );
};

export default Drawer;
