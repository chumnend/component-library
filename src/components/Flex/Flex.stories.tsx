import React from 'react';
import { Story, Meta } from '@storybook/react';

import Flex, { Props as FlexProps } from './Flex';

export default {
  title: 'Flex',
  component: Flex,
  argTypes: {},
} as Meta<typeof Flex>;

const Template: Story<FlexProps> = (args) => <Flex {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: [<div key={1}>Hello</div>, <div key={2}>World</div>],
};
