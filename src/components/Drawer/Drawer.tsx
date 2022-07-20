import React from 'react';

import * as $ from './Drawer.styles';

export interface Props {
  show: boolean;
  close?: () => void;
  children?: React.ReactNode;
}

const Drawer = ({ show, close = () => null, children }: Props) => {
  return (
    <$.Drawer show={show}>
      <$.Close>
        <i className="fas fa-times" onClick={close} />
      </$.Close>
      <$.Ul>{children}</$.Ul>
    </$.Drawer>
  );
};

export default Drawer;
