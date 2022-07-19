import React from 'react';

import { ILink } from '../Navbar';
import * as $ from './Navigation.styles';

export interface Props {
  links: ILink[];
  open: () => void;
}

const Navigation = ({ links, open }: Props) => {
  return (
    <$.Navigation>
      <$.Menu onClick={open}>
        <i className="fas fa-bars" />
      </$.Menu>
      <$.Ul>
        {links.map((el) => (
          <$.Li key={el.title}>
            <$.NavLink to={el.path}>{el.title}</$.NavLink>
          </$.Li>
        ))}
      </$.Ul>
    </$.Navigation>
  );
};

export default Navigation;
