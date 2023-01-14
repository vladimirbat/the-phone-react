import { render } from '@testing-library/react';

import AppBreadcumb from './app-breadcumb';

describe('AppBreadcumb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppBreadcumb />);
    expect(baseElement).toBeTruthy();
  });
});
