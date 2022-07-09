import React from 'react';

import * as $ from './PageWrapper.styles';

export interface Props {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  return (
    <$.OuterDiv>
      <$.InnerDiv>{children}</$.InnerDiv>
    </$.OuterDiv>
  );
};

export default PageWrapper;
