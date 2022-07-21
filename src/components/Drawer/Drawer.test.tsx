import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Drawer from './Drawer';
import DrawerLink from '../DrawerLink';

describe('<Drawer />', () => {
  test('render Drawer with no links', () => {
    render(<Drawer show={true} />);
  });

  test('render Drawer with links', () => {
    render(
      <Drawer show={true} close={console.log}>
        <DrawerLink title="Home" path="#" close={console.log} />
        <DrawerLink title="About" path="#" close={console.log} />
        <DrawerLink title="Contact" path="#" close={console.log} />
      </Drawer>,
    );
    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.getByText('About')).toBeVisible();
    expect(screen.getByText('Contact')).toBeVisible();
  });

  test('render hidden Drawer', () => {
    render(
      <Drawer show={false} close={console.log}>
        <DrawerLink title="Home" path="#" close={console.log} />
        <DrawerLink title="About" path="#" close={console.log} />
        <DrawerLink title="Contact" path="#" close={console.log} />
      </Drawer>,
    );
    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.getByText('About')).toBeVisible();
    expect(screen.getByText('Contact')).toBeVisible();
  });
});
