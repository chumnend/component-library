import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Footer from './Footer';

describe('<Footer />', () => {
  test('render Footer without error', () => {
    render(<Footer />);
  });
});
