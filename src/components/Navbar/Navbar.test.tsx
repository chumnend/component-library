import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Navbar from './Navbar';
import NavLink from '../NavLink';

describe('<Navbar />', () => {
  test('render Navbar without links', () => {
    render(<Navbar title="Navbar" />);
    expect(screen.getByText('Navbar')).toBeVisible();
  });

  test('render Navbar with links', () => {
    render(
      <Navbar title="Navbar">
        <NavLink title="Home" path="#" />
        <NavLink title="About" path="#" />
        <NavLink title="Contact" path="#" />
      </Navbar>,
    );

    expect(screen.getByText('Navbar')).toBeVisible();
    expect(screen.getByText('Home')).not.toBeVisible();
    expect(screen.getByText('About')).not.toBeVisible();
    expect(screen.getByText('Contact')).not.toBeVisible();
  });
});
