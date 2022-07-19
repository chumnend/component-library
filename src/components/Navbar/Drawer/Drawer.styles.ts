import styled from 'styled-components';

import { device, color } from '../../../helpers/themes';

interface DrawerProps {
  readonly show: boolean;
}

export const Drawer = styled.div<DrawerProps>`
  width: ${(props) => (props.show ? '60%' : '0')};
  height: 100vh;
  background: ${color.black};
  color: ${color.white};
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  transition: width 0.3s ease-out;
  display: flex;
  flex-flow: column;
  @media all and (min-width: ${device.lg}) {
    display: none;
  }
`;

export const Close = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row-reverse;
  & i {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Li = styled.li`
  display: inline-block;
  padding: 1rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  background: inherit;
  color: inherit;
  font-size: 1.2rem;
  &:hover {
    color: ${color.red};
  }
`;
