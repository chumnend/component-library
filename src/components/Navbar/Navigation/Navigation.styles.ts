import styled from 'styled-components';

import { color, device } from '../../../helpers/themes';

export const Navigation = styled.div``;

export const Ul = styled.ul`
  display: none;
  list-style: none;
  @media all and (min-width: ${device.lg}) {
    display: flex;
  }
`;

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

export const Menu = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  @media all and (min-width: ${device.lg}) {
    display: none;
  }
`;
