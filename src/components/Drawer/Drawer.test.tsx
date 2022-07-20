import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Drawer from './Drawer';

describe('<Navbar />', () => {
  test('render Navbar without errors', () => {
    render(<Drawer show={true} />);
  });
});
