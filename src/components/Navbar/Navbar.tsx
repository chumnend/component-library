import React, { useState } from 'react';

import Drawer from './Drawer';
import Navigation from './Navigation';
import * as $ from './Navbar.styles';

export interface ILink {
  title: string;
  path: string;
}

export interface Props {
  title: string;
  links: ILink[];
}

const Navbar = ({ title, links = [] }: Props) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <$.Navbar>
      <$.Container>
        <$.Brand>{title}</$.Brand>
        <Navigation links={links} open={() => setShowDrawer(true)} />
      </$.Container>
      <Drawer
        links={links}
        show={showDrawer}
        close={() => setShowDrawer(false)}
      />
    </$.Navbar>
  );
};

export default Navbar;
