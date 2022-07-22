import styled from 'styled-components';

import { color, device } from '../../helpers/themes';

export const Navbar = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  position: relative;
  z-index: 1;
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${color.black};
  @media all and (min-width: ${device.lg}) {
    font-size: 1.75rem;
  }
`;

export const Navigation = styled.div``;

export const Ul = styled.ul`
  display: none;
  list-style: none;
  @media all and (min-width: ${device.lg}) {
    display: flex;
  }
`;

export const Menu = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  @media all and (min-width: ${device.lg}) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
`;
