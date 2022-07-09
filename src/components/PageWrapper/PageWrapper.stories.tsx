import React from 'react';
import { Story, Meta } from '@storybook/react';

import PageWrapper, { Props as PageWrapperProps } from './PageWrapper';

export default {
  title: 'PageWrapper',
  component: PageWrapper,
  argTypes: {},
} as Meta<typeof PageWrapperProps>;

const Template: Story<PageWrapperProps> = (args) => <PageWrapper {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: [
    <div key={1} style={{ background: 'red', padding: '8px' }}>
      <h2>Test</h2>
    </div>,
  ],
};
