import React from 'react';
import { Story, Meta } from '@storybook/react';

import Drawer, { Props as DrawerProps } from './Drawer';
import DrawerLink from '../DrawerLink';

export default {
  title: 'Drawer',
  component: Drawer,
} as Meta<DrawerProps>;

const Template: Story<DrawerProps> = (args) => <Drawer {...args} />;

export const Example = Template.bind({});
Example.args = {
  show: true,
  close: () => console.log('menu clicked'),
  children: [
    <DrawerLink
      key={1}
      title="Home"
      path="#"
      close={() => console.log('clicked')}
    />,
    <DrawerLink
      key={2}
      title="About"
      path="#"
      close={() => console.log('clicked')}
    />,
    <DrawerLink
      key={3}
      title="Contact"
      path="#"
      close={() => console.log('clicked')}
    />,
  ],
};
