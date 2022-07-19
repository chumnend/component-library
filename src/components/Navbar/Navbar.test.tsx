import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Navbar from './Navbar';

describe('<Navbar />', () => {
  test('render Navbar without errors', () => {
    render(<Navbar title="Navbar" />);
    expect(screen.getByText('Navbar')).toBeVisible();
  });
});
