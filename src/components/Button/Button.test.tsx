import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  test('render Button with primary variant', () => {
    render(<Button text="Primary" variant="primary" />);
    expect(screen.getByRole('button', { name: 'Primary' })).toBeVisible();
  });

  test('render Button with secondary variant', () => {
    render(<Button text="Secondary" variant="secondary" />);
    expect(screen.getByRole('button', { name: 'Secondary' })).toBeVisible();
  });

  test('check Button is disabled', () => {
    render(<Button text="Button" variant="primary" disabled />);
    expect(screen.getByRole('button', { name: 'Button' })).toBeDisabled();
  });
});
