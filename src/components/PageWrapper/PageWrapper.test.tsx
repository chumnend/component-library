import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import PageWrapper from './PageWrapper';

describe('<PageWrapper />', () => {
  test('renders PageWrapper without errors', () => {
    render(<PageWrapper>Test</PageWrapper>);
    expect(screen.getByText('Test')).toBeVisible();
  });
});
