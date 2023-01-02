import { render } from '@testing-library/react';

import PhoneDetailsPage from './phone-details-page';

describe('PhoneDetailsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneDetailsPage />);
    expect(baseElement).toBeTruthy();
  });
});
