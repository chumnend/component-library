import React from 'react';

import * as $ from './Navbar.styles';

export interface Props {
  title: string;
  open: () => void;
  children?: React.ReactNode;
}

const Navbar = ({ title, open, children }: Props) => {
  return (
    <$.Navbar>
      <$.Container>
        <$.Brand>{title}</$.Brand>
        <$.Navigation>
          <$.Menu onClick={open} data-testid="menu-button">
            <$.Line />
            <$.Line />
            <$.Line />
          </$.Menu>
          <$.Ul>{children}</$.Ul>
        </$.Navigation>
      </$.Container>
    </$.Navbar>
  );
};

export default Navbar;
