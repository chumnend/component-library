import React from 'react';

import { ILink } from '../Navbar';
import * as $ from './Drawer.styles';

export interface Props {
  links: ILink[];
  show: boolean;
  close: () => void;
}

const Drawer = ({ links, show, close }: Props) => {
  return (
    <$.Drawer show={show}>
      <$.Close>
        <i className="fas fa-times" onClick={close} />
      </$.Close>
      <$.Ul>
        {links.map((el) => (
          <$.Li key={el.title}>
            <$.NavLink to={el.path} onClick={close}>
              {el.title}
            </$.NavLink>
          </$.Li>
        ))}
      </$.Ul>
    </$.Drawer>
  );
};

export default Drawer;
