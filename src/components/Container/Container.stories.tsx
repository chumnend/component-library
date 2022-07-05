import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container, { Props as ContainerProps } from './Container';

export default {
  title: 'Container',
  component: Container,
  argTypes: {},
} as Meta<typeof Container>;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: <div>Test</div>,
};
