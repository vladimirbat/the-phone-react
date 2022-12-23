import { render } from '@testing-library/react';

import PhoneCard from './phone-card';

describe('PhoneCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneCard />);
    expect(baseElement).toBeTruthy();
  });
});
