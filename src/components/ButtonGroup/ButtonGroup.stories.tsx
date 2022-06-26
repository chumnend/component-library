import React from 'react';
import { Story, Meta } from '@storybook/react';

import ButtonGroup, { Props as ButtonGroupProps } from './ButtonGroup';
import Button from '../Button';

export default {
  children: <Button text="Button" variant="primary" />,
  direction: 'column',
} as Meta<typeof ButtonGroup>;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: [
    <Button key={1} text="Button" variant="primary" />,
    <Button key={2} text="Button" variant="primary" />,
    <Button key={3} text="Button" variant="primary" />,
  ],
};

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
  children: [
    <Button key={1} text="Button" variant="primary" />,
    <Button key={2} text="Button" variant="primary" />,
    <Button key={3} text="Button" variant="primary" />,
  ],
};
