import React from 'react';
import { Story, Meta } from '@storybook/react';

import Modal, { Props as ModalProps } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {},
} as Meta<typeof ModalProps>;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: [
    <div key={1} style={{ background: 'red', padding: '8px' }}>
      <h2>Test</h2>
    </div>,
  ],
  show: true,
};
