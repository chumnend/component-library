import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Flex from './Flex';

describe('<Flex />', () => {
  test('renders Flex without errors', () => {
    render(
      <Flex>
        <div>Hello</div>
        <div>World</div>
      </Flex>,
    );

    expect(screen.getByText('Hello')).toBeVisible();
    expect(screen.getByText('World')).toBeVisible();
  });
});
