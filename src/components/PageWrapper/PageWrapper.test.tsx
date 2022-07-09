import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import PageWrapper from './PageWrapper';

describe('<Button />', () => {
  test('render Button with primary variant', () => {
    render(<PageWrapper>Test</PageWrapper>);
    expect(screen.getByText('Test')).toBeVisible();
  });
});
