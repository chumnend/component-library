import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Container from './Container';

describe('<Container />', () => {
  test('render Container without error', () => {
    render(<Container>Test</Container>);
    expect(screen.getByText('Test')).toBeVisible();
  });
});
