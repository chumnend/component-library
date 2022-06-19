import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ButtonGroup from './ButtonGroup';
import Button from '../Button';

describe('<ButtonGroup />', () => {
  test('renders ButtonGroup with column direction', () => {
    render(
      <ButtonGroup direction="column">
        <Button text="Button1" variant="primary" />
        <Button text="Button2" variant="primary" disabled />
      </ButtonGroup>,
    );

    expect(screen.getByRole('button', { name: 'Button1' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Button2' })).toBeVisible();
  });

  test('renders ButtonGroup with row direction', () => {
    render(
      <ButtonGroup direction="row">
        <Button text="Button1" variant="primary" />
        <Button text="Button2" variant="primary" disabled />
      </ButtonGroup>,
    );

    expect(screen.getByRole('button', { name: 'Button1' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Button2' })).toBeVisible();
  });
});
