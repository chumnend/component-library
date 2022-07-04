import React from 'react';
import { Meta } from '@storybook/react';

import Spinner from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
  argTypes: {},
} as Meta<typeof Spinner>;

export const Example = () => <Spinner />;
