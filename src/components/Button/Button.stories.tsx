import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { Props as ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  text: 'Primary',
  disabled: false,
  onClick: () => null,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  text: 'Secondary',
  disabled: false,
  onClick: () => null,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  text: 'Disabled',
  disabled: true,
  onClick: () => null,
};
