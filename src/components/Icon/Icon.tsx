import React from 'react';

import * as $ from './Icon.styles';

export interface Props {
  link?: string;
  children: React.ReactNode;
}

const Icon = ({ link = '', children }: Props) => {
  if (link) {
    return (
      <$.IconLink href={link} target="_blank" rel="noreferrer">
        {children}
      </$.IconLink>
    );
  } else {
    return <$.Icon>{children}</$.Icon>;
  }
};

export default Icon;
