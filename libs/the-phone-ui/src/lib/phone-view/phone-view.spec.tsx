import { render } from '@testing-library/react';

import PhoneView from './phone-view';

describe('PhoneView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneView />);
    expect(baseElement).toBeTruthy();
  });
});
