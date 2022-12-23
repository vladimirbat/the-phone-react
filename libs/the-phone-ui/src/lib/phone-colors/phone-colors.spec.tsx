import { render } from '@testing-library/react';

import PhoneColors from './phone-colors';

describe('PhoneColors', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneColors />);
    expect(baseElement).toBeTruthy();
  });
});
