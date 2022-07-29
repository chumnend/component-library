import styled from 'styled-components';

import { color } from '../../helpers/themes';

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  & i {
    font-size: 3rem;
  }
  & span {
    font-size: 1rem;
  }
`;

export const IconLink = styled.a`
  text-decoration: none;
  color: ${color.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  & i {
    font-size: 3rem;
  }
  & span {
    font-size: 1rem;
  }
  &:hover {
    color: ${color.grey};
    fill: ${color.grey};
  }
`;
