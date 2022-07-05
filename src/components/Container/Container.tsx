import React from 'react';
import * as $ from './Container.styles';

export interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <$.Div>{children}</$.Div>;
};

export default Container;
