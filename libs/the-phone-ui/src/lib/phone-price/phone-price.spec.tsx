import { render } from '@testing-library/react';

import PhonePrice from './phone-price';

describe('PhonePrice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhonePrice />);
    expect(baseElement).toBeTruthy();
  });
});
