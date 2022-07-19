import React from 'react';
import { Story, Meta } from '@storybook/react';

import Navbar, { Props as NavbarProps } from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
} as Meta<typeof Navbar>;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: 'Navbar',
  links: [
    { title: 'Home', path: '/' },
    { title: 'Contact', path: '/' },
  ],
};

export const NoLinks = Template.bind({});
Example.args = {
  title: 'Navbar',
  links: [],
};
