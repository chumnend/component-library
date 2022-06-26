import React from 'react';
import * as $ from './Banner.styles';

export interface Props {
  src: string;
  alt: string;
  title: string;
  color?: string;
}

const Banner = ({ src, alt, title, color = 'black' }: Props) => {
  return (
    <$.Div>
      <img src={src} alt={alt} />
      <$.Title color={color}>{title}</$.Title>
    </$.Div>
  );
};

export default Banner;
