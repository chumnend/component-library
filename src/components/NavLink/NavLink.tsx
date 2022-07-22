import React from 'react';

import * as $ from './NavLink.styles';

export interface Props {
  title: string;
  path: string;
}

const NavLink = ({ title, path }: Props) => {
  return (
    <$.Li>
      <$.NavLink href={path}>{title}</$.NavLink>
    </$.Li>
  );
};

export default NavLink;
