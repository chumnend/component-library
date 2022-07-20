import React from 'react';

import * as $ from './DrawerLink.styles';

export interface Props {
  title: string;
  path: string;
  close: () => void;
}

const DrawerLink = ({ title, path, close }: Props) => {
  return (
    <$.Li>
      <$.NavLink href={path} onClick={close}>
        {title}
      </$.NavLink>
    </$.Li>
  );
};

export default DrawerLink;
