import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Modal from './Modal';

describe('<Modal />', () => {
  test('render visable Modal without error', () => {
    render(
      <Modal show={true} close={() => null}>
        Test
      </Modal>,
    );
    expect(screen.getByText('Test')).toBeVisible();
  });

  test('renders hidden Modal without error', () => {
    render(
      <Modal show={false} close={() => null}>
        Test
      </Modal>,
    );
    expect(screen.getByText('Test')).not.toBeVisible();
  });
});
