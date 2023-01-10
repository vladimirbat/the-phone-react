import { render } from '@testing-library/react';

import DummyPhoneCard from './dummy-phone-card';

describe('DummyPhoneCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DummyPhoneCard />);
    expect(baseElement).toBeTruthy();
  });
});
