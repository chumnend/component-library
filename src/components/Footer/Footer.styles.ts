import styled from 'styled-components';
import { device, color } from '../../helpers/themes';

export const Footer = styled.div`
  width: 100%;
  background: ${color.white};
  color: ${color.black};
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (min-width: ${device.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Icon = styled.a`
  font-size: 1.7rem;
  color: ${color.black};
  margin: 0 0.5rem;
  text-decoration: none;

  &:first-child {
    margin-left: 0;
  }

  svg:hover {
    fill: ${color.grey};
  }
`;

export const Brand = styled.div`
  font-weight: bold;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.3rem;
  }

  @media all and (min-width: ${device.md}) {
    margin: 0;
  }
`;
