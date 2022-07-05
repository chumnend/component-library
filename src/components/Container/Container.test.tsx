import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Container from './Container';

describe('<Button />', () => {
  test('render Button with primary variant', () => {
    render(<Container>Test</Container>);
    expect(screen.getByText('Test')).toBeVisible();
  });
});
