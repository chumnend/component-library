import styled from 'styled-components';

import { device, color } from '../../helpers/themes';

interface DrawerProps {
  readonly show: boolean;
}

export const Drawer = styled.div<DrawerProps>`
  width: ${(props) => (props.show ? '50%' : '0')};
  height: 100vh;
  background: ${color.white};
  color: ${color.black};
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  transition: width 0.3s ease-out;
  display: flex;
  flex-flow: column;
  border-top: 1px solid ${color.black};
  border-bottom: 1px solid ${color.black};
  border-left: 1px solid ${color.black};

  @media all and (min-width: ${device.lg}) {
    width: ${(props) => (props.show ? '30%' : '0')};
  }
`;

export const Close = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
`;

export const CloseIcon = styled.i`
  height: 100%;
  width: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
