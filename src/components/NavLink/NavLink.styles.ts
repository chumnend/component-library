import styled from 'styled-components';

import { color } from '../../helpers/themes';

export const Li = styled.li`
  display: inline-block;
  padding: 0.5rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  background: inherit;
  color: inherit;
  font-size: 1.2rem;
  &:hover {
    color: ${color.black};
  }
`;
