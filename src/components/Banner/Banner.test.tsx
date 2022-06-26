import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Banner from '../Banner';

describe('<Banner />', () => {
  test('render Banner', () => {
    render(<Banner src="" alt="banner" title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeVisible();
  });
});
