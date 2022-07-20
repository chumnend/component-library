import React from 'react';
import { Story, Meta } from '@storybook/react';

import Navbar, { Props as NavbarProps } from './Navbar';
import NavLink from '../NavLink';

export default {
  title: 'Navbar',
  component: Navbar,
} as Meta<typeof Navbar>;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: 'Navbar',
  open: () => console.log('menu clicked'),
  children: [
    <NavLink key={1} title="Home" path="/" />,
    <NavLink key={2} title="About" path="/" />,
    <NavLink key={3} title="Contact" path="/" />,
  ],
};
