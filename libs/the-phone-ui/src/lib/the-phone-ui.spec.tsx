import { render } from '@testing-library/react';

import ThePhoneUi from './the-phone-ui';

describe('ThePhoneUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThePhoneUi />);
    expect(baseElement).toBeTruthy();
  });
});
