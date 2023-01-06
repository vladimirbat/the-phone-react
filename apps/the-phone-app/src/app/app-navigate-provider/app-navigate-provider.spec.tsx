import { render } from '@testing-library/react';

import AppNavigateProvider from './app-navigate-provider';

describe('AppNavigateProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppNavigateProvider />);
    expect(baseElement).toBeTruthy();
  });
});
