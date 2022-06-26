import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

interface TitleProps {
  readonly color: string;
}

export const Title = styled.h3<TitleProps>`
  position: absolute;
  top: 120px;
  color: ${(props) => props.color};
`;
